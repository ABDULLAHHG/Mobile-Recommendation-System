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

renameMainPage()