# Softeng 702 BCI Project
Welcome to our Neurosky project!

The application here records user responses and time taken to reach an answer. A survey in also included at the end that inquiries about the participants opinion about meditation and difficulty of the experiment, etc.
The python script is used to record the EEG data obtained from the Neurosky Mindwave headset. 

## Users
### Instructions for installation
Download the distribution package found here:
```
Insert link here
```

Run the .exe file called **react-interface.exe**.

## Developers
### Development
Install the dependencies with:
```bash
npm install
```

Within the **react-interface** folder, run the following command to develop with Electron:

```bash
npm run electron-dev
```

Within the **react-interface** folder, run the following command to develop in a browser:

```bash
npm run start
```

Within the **backend** folder, run the following command to start the file-handling server:

```bash
npm run start
```

### Deployment
To deploy a Windows Electron application, run the following command:

```bash
npm run electron-build
```

### EEG Data Collection
Within the python-eeg folder, run the following command to install the packages:

```bash
pip install NeuroSkyPy
pip install pyserial
```

Data collection was completed using the Neurosky Mindwave Mobile 2. 

To replicate the data collection, ensure the Neurosky Mindwave drivers are installed beforehand, these drivers can be found at:

http://mindwavemobileplus.neurosky.com/#windows

The filename is in the following format, with timestamp and id for the session:

Participant[participant id]Task[task id]Date[yyyy-mm-dd-hh-mm-ss].txt

The log file's records one comma delineated row for each sample, the format for a row is the following:

timestamp (hh-mm-ss), meditation, attention, raw eeg reading

## Experiment preparations
Ensure that all the experiment is conducted in a quiet environment as the Neurosky Mindwave is susceptible to noise.

Provide each participant with a participant ID and ensure the headset to attached properly to the partipant's head and the clip is placed onto the ear lobe with the wire correctly going behind the ear.

Execute the python script and enter the partipant and task ID.

Ensure that data recording is started before experiment begins.

Open the application UI for the participant.

Ensure the participant reads the PIS and consent form and has the opporunity to ask questions before starting the experiment.

## System Requirements 
In order to run the project locally, you must ensure you have setup, installed and tested:

-   `git`
-   `node.js`
-   `python3`
-   `Neurosky Mindwave driver`

This implementation is fully supported and tested on Windows 10
