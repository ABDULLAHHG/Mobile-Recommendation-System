import pandas as pd 
from bs4 import BeautifulSoup
df = pd.read_csv('Data/CSV/All mobile phone brands.csv')
brands = df['Brand']

pages = []
brandNames = []

for i , brand in enumerate(brands):
     # Read the saved file with BeautifulSoup
    
    with open(f'Data/HTML/{brands[i]} phones.html') as file:
        soup = BeautifulSoup( file , 'html.parser')

        pages.append([df['Link'][i]])
        brandNames.append([brand])

        link_pages = soup.find('div',  class_="nav-pages").find_all('a')
        for link_page in link_pages:
            pages.append(f"https://www.gsmarena.com/{link_pages['href']}")
            brandNames.append(brand)

pages = pd.DataFrame({'Brand' : brandNames , 'Link' : link_pages})
pages.to_csv('Data/CSV/Pages for each Brand.csv')
