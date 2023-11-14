import os 
import pandas as pd 

def CreateDirectoryForEachBrand():
    df = pd.read_csv('Data/GSMArena/CSV/All mobile phone brands.csv')
    brands = df.Brand
    for brand in brands:
        os.mkdir(f'Data/GSMArena/HTML/{brand}') 

# Rename a file
os.rename("old_name.txt", "new_name.txt")

# Rename a file with a specific path
os.rename("/my/path/to/old_name.txt", "/my/path/to/new_name.txt")