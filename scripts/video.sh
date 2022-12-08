# take a folder of images and stitch them together into a video
# requires ffmpeg
# usage: video.sh <folder> <output>

# get the folder and output
folder=$1
output=$2

# get the number of images
num=$(ls $folder | wc -l)

echo "creating video from $num images in $folder"

# create the video
ffmpeg -framerate 10 -pattern_type glob -i "$folder\/*.png" -c:v libx264 -r 30 -pix_fmt yuv420p "$output"
echo "video created"
# done
echo "done"
