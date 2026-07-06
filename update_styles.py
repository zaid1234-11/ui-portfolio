import os
import glob

d = r'c:\Users\zaids\Downloads\ui-portfolio\src\components\case-studies\RetroLabCaseStudy'
files = glob.glob(os.path.join(d, '*.tsx'))

replacements = {
    'bg-[#162127]': 'bg-transparent',
    'bg-[#0d1418]': 'bg-white',
    'text-[#FAF6EE]': 'text-[#1c1c1b]',
    'text-[#FAF6EE]/50': 'text-[#4E4842]/70',
    'text-[#FAF6EE]/60': 'text-[#4E4842]/70',
    'text-[#FAF6EE]/70': 'text-[#4E4842]/85',
    'text-[#FAF6EE]/80': 'text-[#4E4842]/90',
    'border-white/10': 'border-black/10',
    'border-white/5': 'border-black/5',
    'border-white/20': 'border-black/20',
    'border-white/30': 'border-black/30',
    'bg-white/5': 'bg-black/5',
    'bg-white/10': 'bg-black/10',
    'bg-white/20': 'bg-black/20',
    'bg-white/[0.02]': 'bg-black/[0.02]',
    'text-white': 'text-[#1c1c1b]',
    'text-white/50': 'text-[#1c1c1b]/50',
    'text-white/70': 'text-[#1c1c1b]/70',
    'text-white/30': 'text-[#1c1c1b]/30',
    'rgba(255,255,255,0.1)': 'rgba(0,0,0,0.1)',
    'rgba(255,255,255,0.02)': 'rgba(0,0,0,0.03)',
    'rgba(0,0,0,0.4)': 'rgba(0,0,0,0.05)',
    'bg-black/20': 'bg-transparent',
    'bg-white/[0.02]': 'bg-black/5',
    'border-[#E34A53]/30': 'border-[#E34A53]/30',
}

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Specific tweaks for Hero and CTA where the button was inverted
    content = content.replace('bg-[#FAF6EE] hover:bg-[#E34A53] text-[#162127] hover:text-[#FAF6EE]', 'bg-[#1c1c1b] hover:bg-[#E34A53] text-[#FAF6EE] hover:text-[#FAF6EE]')
    content = content.replace('bg-[#E34A53] hover:bg-[#FAF6EE] text-[#FAF6EE] hover:text-[#162127]', 'bg-[#E34A53] hover:bg-[#1c1c1b] text-[#FAF6EE] hover:text-[#FAF6EE]')
    content = content.replace('bg-white/5 hover:bg-white/10 border border-white/10 text-[#FAF6EE]', 'bg-black/5 hover:bg-black/10 border border-black/10 text-[#1c1c1b]')
    
    # In DesignSystem, we had some specific colors
    content = content.replace("class: 'bg-[#FAF6EE]', text: 'text-[#0d1418]'", "class: 'bg-[#FAF6EE]', text: 'text-[#1c1c1b]'")
    content = content.replace("class: 'bg-[#162127]', text: 'text-white'", "class: 'bg-[#162127]', text: 'text-[#FAF6EE]'")
    content = content.replace("class: 'bg-[#0d1418]', text: 'text-white'", "class: 'bg-[#0d1418]', text: 'text-[#FAF6EE]'")
    
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)

print('Done!')
