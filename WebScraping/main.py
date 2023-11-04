import requests
from bs4 import BeautifulSoup
import time
import pandas as pd 

# https://m.gsmarena.com , https://www.kimovil.com/en/ 
# https://www.kimovil.com/en/where-to-buy-xiaomi-redmi-note-13-pro-plus
# https://m.gsmarena.com/xiaomi_14-12626.php


# Extract Data from (m.gsmarena.com)
class ExtractFromGsmArena:
    def __init__(self):
        # for not getting banned for day 
        # time.sleep(90)
        # Send a request 
        pass      


    def ExtractPhone(self , link : str):
        self.response = requests.get(link)
        soup = BeautifulSoup(self.response.content, 'html.parser')
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

        # Extract Data using link Online or using Local file offline 
    def extractAllBrand(self , link : str = "https://www.gsmarena.com/makers.php3" , 
                        file_name = 'WebScraping/Data/GSMArena/HTML/All mobile phone brands.html' , 
                        useLink : bool = 1):
        '''We will extract all `Brand` and `number of device` and `link` for each brand'''
        
        if useLink:
            # Send a request 
            response = requests.get(link)
            self.response = response
            soup = BeautifulSoup(response.content , 'html.parser')
        
        else:
            # Read the saved file with BeautifulSoup
            with open("WebScraping/Data/GSMArena/HTML/All mobile phone brands.html") as file:
                soup = BeautifulSoup(file , 'html.parser')



        allBrandsAndNumberOfDevices = soup.find('div' , class_="st-text").find_all('a')

        # Create two list one for save the Brand and another for number of device in each brand 
        brands = []
        allNumberOfDevices = []
        linkForEachBrand = []
        
        # Loop through all the brands 
        for brandAndNumberOfdevice in allBrandsAndNumberOfDevices:
            # for Brand that the name contains just one word  
            if len(brandAndNumberOfdevice.get_text(separator=' ').split()) == 3:
                # Add them in separated variables 
                brand = brandAndNumberOfdevice.get_text(separator=' ').split()[0]
                numberOfDevices = brandAndNumberOfdevice.get_text(separator=' ').split()[1]
            
            # for the Brand that its name contains 2 words 
            elif len(brandAndNumberOfdevice.get_text(separator=' ').split()) == 4:
                # Add them in separated variables 
                brand = " ".join(brandAndNumberOfdevice.get_text(separator=' ').split()[0:2])
                numberOfDevices = brandAndNumberOfdevice.get_text(separator=' ').split()[2]

            # Create a link var
            link = brandAndNumberOfdevice['href']
            
            # Add them to the list
            brands.append(brand)
            allNumberOfDevices.append(numberOfDevices)
            linkForEachBrand.append(f"https://www.gsmarena.com/{link}")
        
        # Create a DataFrame that contains the Brand and Device
        df = pd.DataFrame({'Brand' : brands ,
                           'Devices' : allNumberOfDevices ,
                           'Link' : linkForEachBrand})
        return df 
    
    # To know how many pages for each brand and save it 
    def ExtractBrandPages(self):
        # Read DataFrame
        df = pd.read_csv('WebScraping/Data/GSMArena/CSV/All mobile phone brands.csv')
        
        # important columns 
        brands = df['Brand']
        links = df['Link']
        
        # So we cant send more than 5 request even if we use sleep 60 sec 
        # couse we will get baned
        for i , link in enumerate(links):
            time.sleep(90)
            self.response = requests.get(link)
            self.responseToText()
            if i%5 ==0.0 and i != 0:
                time.sleep(1800)
    
    # Scrap all link pages for scraping images and Mobile names 
    def extractAllLinksOfBrandPages(self):
        df = pd.read_csv('WebScraping/Data/GSMArena/CSV/All mobile phone brands.csv')
        brands = df['Brand']

        pages = []
        brandNames = []

        for i , brand in enumerate(brands):
            # Read the saved file with BeautifulSoup
            
            with open(f'WebScraping/Data/GSMArena/HTML/{brands[i]} phones.html') as file:
                soup = BeautifulSoup( file , 'html.parser')

                pages.append(df['Link'][i])
                brandNames.append(brand)
                # There is Brand with one page only
                try:
                    link_pages = soup.find('div',  class_="nav-pages").find_all('a')
                    for link_page in link_pages:
                        pages.append(f"https://www.gsmarena.com/{link_page['href']}")
                        brandNames.append(brand)
                except:
                    continue



        pages = pd.DataFrame({'Brand' : brandNames , 'Link' : pages})
        
        # Save it as CSV 
        self.SaveAsCsv(pages , "Pages for each Brand.csv")

    # for save a DataFrame as csv  
    def SaveAsCsv(self , df , file_name : str):
        df.to_csv(f'WebScraping/Data/GSMArena/CSV/{file_name}.csv')

    
    def responseToText(self):
        # Send a request 
        response = self.response 
        soup = BeautifulSoup(response.content , 'html.parser')
        file_name = soup.find('h1').text

        # Save the response to a file
        with open(f"WebScraping/Data/HTML/{file_name}.html", "w") as file:
            file.write(response.text)

            



# https://www.kimovil.com/en/where-to-buy-xiaomi-redmi-note-13-pro-plus
def ExtractFromKivmovil():
    website = 'https://www.kimovil.com/en/where-to-buy-xiaomi-redmi-note-13-pro-plus'
    cookies = dict(BCPermissionLevel='PERSONAL')
    html = requests.get(website, headers={"User-Agent": "Mozilla/5.0"}, cookies=cookies)

    soup = BeautifulSoup(html.content , 'html.parser')
    print(soup)

GA = ExtractFromGsmArena()
# GA.BrandPages()
# df = GA.extractAllBrand(useLink=0)
# GA.SaveAsCsv(df , 'All mobile phone brands')
