<?php

// Define the root directory to start searching from
$rootDirectory = './'; // You can change this to any directory

// Recursively search for .svg files
$iterator = new RecursiveIteratorIterator(new RecursiveDirectoryIterator($rootDirectory));

foreach ($iterator as $file) {
    // Check if the file is an .svg file
    if ($file->isFile() && $file->getExtension() === 'svg') {
        $oldFilePath = $file->getPathname();
        $oldFileName = $file->getFilename();

        // Replace spaces with dashes and convert to lowercase
        $newFileName = str_replace(' ', '-', $oldFileName);
        $newFileName = strtolower($newFileName);

        // If the filename has changed, rename the file
        if ($newFileName !== $oldFileName) {
            $newFilePath = $file->getPath() . DIRECTORY_SEPARATOR . $newFileName;
            rename($oldFilePath, $newFilePath);
            echo "Renamed: $oldFilePath -> $newFilePath\n";
        }
    }
}

echo "Done!\n";

?>