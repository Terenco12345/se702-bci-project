import os
import json
from collections import defaultdict
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import datetime
import numpy as np
import pickle5 as pickle
from scipy.stats import ttest_ind


def load_json(folder):
    jsons = defaultdict()
    for file in os.listdir(folder):
        if file.endswith(".json"):
            with open(os.path.join(folder, file)) as json_file:
                data = json.load(json_file)
                id = file.split('.')[0]
                jsons[id] = [data["time"]["events"][i]["time"].split(',')[0] for i in range(1, 9)]
    return jsons


def load_eeg(folder):
    eegs = []
    for file in os.listdir(folder):
        if file.endswith(".txt"):
            df = pd.read_csv(os.path.join(folder, file), sep=',', header=None)

            # assign pid
            df[4] = file.split(' ')[1]

            # rename columns
            df = df.rename(columns={0: 'time', 1: 'meditation', 2: 'attention', 3: 'raw', 4: 'pid'})

            # calculate time delta since beginning
            start = datetime.datetime.strptime(df['time'][0], '%H-%M-%S')
            delta = [(datetime.datetime.strptime(d, '%H-%M-%S') - start).seconds for d in df['time']]
            df['delta'] = delta

            # moving average
            mavg = []
            for i in range(len(df['meditation']) - 15):
                mavg.append(np.median(df['meditation'][i:i + 15]))
            mavg.extend([mavg[-1]] * 15)
            df['mavg'] = mavg

            eegs.append(df)

    return eegs


def update_delta_time(json, eeg, pid):
    new_json = defaultdict()
    for id in pid:
        time = json[id]
        temp_eeg = eeg[eeg['pid'] == id]
        start = datetime.datetime.strptime(temp_eeg['time'].iloc[0], '%H-%M-%S')
        delta = [(datetime.datetime.strptime(t, '%H-%M-%S') - start).seconds for t in time]
        new_json[id] = delta
    return new_json


def clean_data(eeg, times, pid):
    clean = defaultdict()
    for id in pid:
        clean[id] = defaultdict()
        new_times = times[id]
        new_eeg = eeg[eeg['pid'] == id]
        clipped_eeg = new_eeg[(new_eeg['delta'] >= new_times[0]) & (new_eeg['delta'] <= new_times[-1])]
        s1 = clipped_eeg[clipped_eeg['delta'] <= new_times[1]]
        s2 = clipped_eeg[clipped_eeg['delta'] > new_times[1]]
        clean[id]['s1'] = s1
        clean[id]['s2'] = s2
    return clean


pid = [file.split('.')[0] for file in os.listdir('backend_log/control')]

# # dump pickle
# c_jsons = load_json('backend_log/control')
# m_jsons = load_json('backend_log/meditation')
# c_eeg = pd.concat(load_eeg('eeg_log/control'))
# m_eeg = pd.concat(load_eeg('eeg_log/meditation'))
#
# c_jsons = update_delta_time(c_jsons, c_eeg, pid)
# m_jsons = update_delta_time(m_jsons, m_eeg, pid)
#
# with open('data.pickle', 'wb') as handle:
#     pickle.dump([c_jsons, m_jsons, c_eeg, m_eeg], handle)

# # clean pickle
# with open('data.pickle', 'rb') as f:
#     unpickler = pickle.Unpickler(f)
#     c_jsons, m_jsons, c_eeg, m_eeg = unpickler.load()
#
# c_clean = clean_data(c_eeg, c_jsons, pid)
# m_clean = clean_data(m_eeg, m_jsons, pid)
#
# with open('clean_data.pickle', 'wb') as handle:
#     pickle.dump([c_clean, m_clean], handle)

# load data
with open('clean_data.pickle', 'rb') as f:
    unpickler = pickle.Unpickler(f)
    c_data, m_data = unpickler.load()

# ttest
# for id in pid:
#     m = m_data[id]['s2']
#     c = c_data[id]['s2']
#     test = ttest_ind(m['attention'], c['attention'])
#     print("id " + id + ": " + str(round(test[0], 3)) + ", " + str(test[1]))
temp1 = m_data['53']['s2']
temp1['lab'] = "m"

temp2 = c_data['53']['s2']
temp2['lab'] = "c"
print(temp1)
temp = pd.concat([temp1, temp2])


# visualise
plt.figure()
sns.set_style("darkgrid")
sns.lineplot(data=temp, x="delta", y="attention", hue="lab", estimator=np.mean, ci=None)
print('done')
plt.show()

# plt.figure()
# sns.lineplot(data=)
