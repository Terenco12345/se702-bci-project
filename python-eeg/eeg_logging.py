from NeuroSkyPy import NeuroSkyPy
from time import sleep
import time
import serial.tools.list_ports

# selecting com port
headset = ''
com_input = input(
    "Please enter COM port of headset such as 'COM3' if it is known, or enter anything else for an automatic scan:")  # Python 3
if "COM" in com_input:
    try:
        ser = serial.Serial(com_input, 9600, timeout=1)
        if len(ser.readline()) > 3:
            print("Neurosky Headset is on port: " + com_input)
            headset = com_input
        ser.close()
    except:
        print("COM port entered cannot be read, starting automatic scan...")
        pass
if headset == '':
    print("Starting automatic scanning for device...")
    devices = [com.device for com in list(serial.tools.list_ports.comports())]
    for device in devices:
        try:
            ser = serial.Serial(device, 9600, timeout=1)
            l1 = ser.read()
            l2 = ser.read()
            if l1 == l2 == b'\xaa':
                print("Neurosky Headset is detected on port: " + device)
                headset = device
            ser.close()
        except:
            pass
if headset == '':
    print("No valid headset found :(")
    exit()

# creating file name
participant = input("Please enter participant ID: ")
task = input("Please enter task ID: ")
time_stamp = time.strftime("%Y-%m-%d-%H-%M-%S")
file_name = "Participant " + participant + " Task " + task + " Date " + time_stamp + ".txt"
file = open("logs/" + file_name, "w")

# opening connection
neuropy = NeuroSkyPy.NeuroSkyPy(headset)
neuropy.start()

print("Reading from headset...")
while True:
    try:
        # modify this line to change what is logged
        file.write(','.join(
            [time.strftime("%H-%M-%S"), str(neuropy.meditation), str(neuropy.attention), str(neuropy.rawValue), '\n']))
        print(time.strftime("%H-%M-%S"), str(neuropy.meditation), str(neuropy.attention), str(neuropy.rawValue))
        sleep(0.2)
    except KeyboardInterrupt:
        print("Finishing up...")
        file.close()
        neuropy.stop()
        exit()
