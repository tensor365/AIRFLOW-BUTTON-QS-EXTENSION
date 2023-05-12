<p align="center" style="vertical-align:center;">
  <a href="https://www.qlik.com/us/products/qlik-sense">
    <img alt="Qlik Sense Client Managed" src="https://mace-solutions.fr/wp-content/uploads/2022/02/qlik-square.png" width="80", height="80" />
  </a>
</p>

<h1 align="center">
  Qlik Sense Extension: Airflow Button(BETA)
</h1>
  <h3 align="center">
    Qlik Sense Button to trigger Airflow Dags from Dashboard
</h3>

<br/>

This repository contains a Qlik button to triggered Airflow Dags from any dashboard. Extension is compatible with the Qlik Sense Cloud and Qlik Client-Managed, but for security purpose, I recommend to use it only on Qlik Client-Managed Ecosystem.

## Requirements

The package has been tested with Python 3.7, Python 3.8.

You need to have a functionnal Airflow Cluster.


## How to install the extension ?

**Step 1**: Download the zip file from the repo 

**Step 2**: Go into Qlik Management Console (QMC)

**Step 3**: Go into Extension Panel

**Step 4**: Click on import button and add the path to zipped extension

## How to use it ?

### 1. Airflow Pre-configuring
<br/>

**Prerequisites**:  
<br>

• An access to Airflow Config 
• An account with read access on the dags that you want to trigger

**Step 1**: Login in your Airflow Server. 

**Step 2**: Go into airflow.config file

**Step 3**: 

**Step 4** Provide following informations:
    
           • Connection Id of your choise
           • Qlik Sense Url using the NTLM Virtual Proxy
           • Qlik Username (DOMAIN\USERNAME)
           • Qlik Password


### 2. Airflow Configuration Button in Qlik Sense
<br/>
Builing the section. No available yet.

