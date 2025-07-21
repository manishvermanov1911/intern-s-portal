#!/bin/bash

for file in *.jpg *.jpeg; do
    if [ -f "$file" ]; then
        echo "Compressing $file..."
        magick "$file" -quality 80 "${file%.*}_temp.${file##*.}"
        if [ -f "${file%.*}_temp.${file##*.}" ]; then
            rm "$file"
            mv "${file%.*}_temp.${file##*.}" "$file"
            echo "Compressed $file successfully"
        else
            echo "Failed to compress $file"
        fi
    fi
done

echo "Compression complete!"
read -p "Press any key to continue..."