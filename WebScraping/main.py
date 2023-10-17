import requests
from bs4 import BeautifulSoup
import time


# https://m.gsmarena.com , https://www.kimovil.com/en/ 
# https://www.kimovil.com/en/where-to-buy-xiaomi-redmi-note-13-pro-plus
# https://m.gsmarena.com/xiaomi_14-12626.php


# Extract Data from (m.gsmarena.com)
def ExtractFromGsmArena():
    time.sleep(90)
    response = requests.get('https://m.gsmarena.com/cubot_note_40-12627.php')
    soup = BeautifulSoup(response.content, 'html.parser')
    print(soup)

    # Extract Phone name 
    Phone_name = soup.find('h1').text 

    # Extract Display Size and Screen Resolution 
    DisplaySizeAndScreenResolution = soup.find('li' , class_ ="head-icon icon-touch-0").text
    DisplaySize = DisplaySizeAndScreenResolution.split('\n')[1]
    ScreenResolution = DisplaySizeAndScreenResolution.split('\n')[2]

    # Extract Camera Pixels and Video Pixels 
    CameraPixelsAndVideoPixels = soup.find('li' ,  class_="head-icon icon-camera-1").text
    CameraPixels = CameraPixelsAndVideoPixels.split('\n')[1]
    VideoPixels = CameraPixelsAndVideoPixels.split('\n')[2]

    # Extract Ram Size and Chipset (Chipset Ex: Snapdragon 8 Gen 3 ) 
    RamSizeAndChipset = soup.find('li' , class_="head-icon icon-cpu").text
    RamSize = RamSizeAndChipset.split('\n')[1]
    Chipset = RamSizeAndChipset.split('\n')[2]

    # Extract Battery Size and Type 
    BatterySizeAndBatteryType = soup.find('li' , class_="head-icon icon-battery-1").text
    BatterySize = BatterySizeAndBatteryType.split('\n')[1]
    BatteryType = BatterySizeAndBatteryType.split('\n')[2]

    # Extract Phone Release Date
    Released = soup.find_all('span' , class_="specs-brief-accent").text





    # print the result 
    print(Phone_name)
    print(DisplaySize)
    print(ScreenResolution)
    print(CameraPixels)
    print(VideoPixels)
    print(RamSize)
    print(Chipset)
    print(BatterySize)
    print(BatteryType)
    print(Released)


