# Softeng 702 BCI Project
Welcome to our Neurosky project!

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

Within the react-interface folder, run the following command to develop with Electron:

```bash
npm run electron-dev
```

Within the react-interface folder, run the following command to develop in a browser:

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

Data collection was completed using the Neurosky Mindwave Mobile 2. To replicate the data collection, ensure the Neurosky Mindwave drivers are installed beforehand. These drivers can be found at:
http://support.neurosky.com/kb/mindwave/mindwave-wont-work-on-mac-or-windows

## Experiment preparations
Ensure that all the experiment is conducted in a quiet environment as the Neurosky Mindwave is susceptible to noise.

Provide each participant with a participant ID and ensure the headset to attached properly to the partipant's head and the clip is placed onto the ear lobe with the wire correctly going behind the ear.

Execute the python script and enter the partipant and task id.

Ensure that data recording is started before experiment begins.

Open the application UI for the participant.

## System Requirements 
In order to run the project locally, you must ensure you have setup, installed and tested:

-   `git`
-   `node.js`
-   `python3`

This implementation is fully supported and tested on Windows 10
