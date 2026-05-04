###### Metadata
ID: 20200408130905
#permanent
#author Charlotte Merzbacher
#title Linear Regression
#model #machinelearning #datascience 
See also:

# Linear Regression

## Data Cleaning
I obtained the Citibike dataset from January 2020 here: [https://www.citibikenyc.com/system-data]
(https://www.citibikenyc.com/system-data). I was interested in replicating the format of the dataset here [http://archive.ics.uci.edu/ml/datasets/bike+sharing+dataset](http://archive.ics.uci.edu/ml/datasets/bike+sharing+dataset) with more recent data from a larger system, so I also downloaded the weather data from Central Park for the same month: [https://w2.weather.gov/climate/xmacis.php?wfo=okx](https://w2.weather.gov/climate/xmacis.php?wfo=okx). These data were in PDF format. I used a PDF to CSV converter to make a CSV, then manually adjusted the header and footer of the table to remove excess rows. 

I loaded the datasets using pandas and examined them: 
`import pandas as pd
  bike_data = pd.read_csv('linear-regression/citibike_jan20.csv')
  weather_data = pd.read_csv('linear-regression/ny_weather_jan20.csv')
  weather_data.head()
`
I then decided which fields I wanted to keep and compute and created a new dataset. I repeated this process for September 2019-February 2020 (6 month time frame).
 
 
