import os
from PIL import Image

def convert_images_to_webp(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                file_path = os.path.join(root, file)
                output_path = os.path.splitext(file_path)[0] + '.webp'
                
                try:
                    with Image.open(file_path) as img:
                        # Keep original orientation if possible
                        if hasattr(img, '_getexif'):
                            exif = img._getexif()
                            if exif:
                                # Standard orientation tag is 274
                                orientation = exif.get(274)
                                if orientation == 3: img = img.rotate(180, expand=True)
                                elif orientation == 6: img = img.rotate(270, expand=True)
                                elif orientation == 8: img = img.rotate(90, expand=True)
                        
                        img.save(output_path, 'WEBP', quality=85)
                        print(f"Converted: {file} -> {os.path.basename(output_path)}")
                except Exception as e:
                    print(f"Error converting {file}: {e}")

if __name__ == "__main__":
    # Convert projects
    convert_images_to_webp('public/projects')
    # Convert portraits/favicons if any
    convert_images_to_webp('public')
