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
```

Data collection was completed using the Neurosky Mindwave Mobile 2. To replicate the data collection, ensure the Neurosky Mindwave drivers are installed beforehand. These drivers can be found at:
http://support.neurosky.com/kb/mindwave/mindwave-wont-work-on-mac-or-windows

## Experiment preparations
Ensure that all the experiment is conducted in a quiet environment as the Neurosky Mindwave is susceptible to noise.
