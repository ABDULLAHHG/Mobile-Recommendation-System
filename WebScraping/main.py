import requests
from bs4 import BeautifulSoup
import time 

time.sleep(90)
# https://m.gsmarena.com , https://www.kimovil.com/en/
response = requests.get('https://www.kimovil.com/en/where-to-buy-xiaomi-redmi-note-13-pro-plus')
soup = BeautifulSoup(response.content,'perser.html')
