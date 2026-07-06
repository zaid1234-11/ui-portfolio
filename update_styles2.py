import os
import glob

d = r'c:\Users\zaids\Downloads\ui-portfolio\src\components\case-studies\RetroLabCaseStudy'
files = glob.glob(os.path.join(d, '*.tsx'))

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    content = content.replace('white/20', 'black/20')
    content = content.replace('white/40', 'black/40')
    content = content.replace('white/80', 'black/80')
        
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print('Done!')
