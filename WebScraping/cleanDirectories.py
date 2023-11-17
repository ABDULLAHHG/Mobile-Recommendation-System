import os 
import pandas as pd 

def CreateDirectoryForEachBrand():
    df = pd.read_csv('Data/GSMArena/CSV/All mobile phone brands.csv')
    brands = df.Brand
    for brand in brands:
        os.mkdir(f'Data/GSMArena/HTML/{brand}') 

def renameMainPage():
    df = pd.read_csv("WebScraping/Data/GSMArena/CSV/All mobile phone brands.csv")
    brands = df.Brand
    for brand in brands:
        # Rename a file
        os.rename(f"WebScraping/Data/GSMArena/HTML/{brand} phones.html", f"WebScraping/Data/GSMArena/HTML/{brand} phones Page1.html")


def MoveBrandPageToMainDirectoryBrand():
    df = pd.read_csv('WebScraping/Data/GSMArena/CSV/Pages for each Brand.csv')
    brands = df.Brand
    pages = df['Page Number'] 
    for index , brand in enumerate(brands):
        # Rename a file
        os.rename(f"WebScraping/Data/GSMArena/HTML/{brand} phones Page{pages[index]}.html", f"WebScraping/Data/GSMArena/HTML/{brand}/{brand} phones Page{pages[index]}.html")
MoveBrandPageToMainDirectoryBrand()