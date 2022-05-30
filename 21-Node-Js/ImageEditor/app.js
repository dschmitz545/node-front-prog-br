const sharp = require('sharp');
const compress_images = require('compress-images');
let fs = require('fs')

let path = process.argv[2]
let width = Number(process.argv[3])

// console.log(path, width)

function resize(pathInput, pathOutputh, width) {
    sharp(path).resize({ width: width }).toFile('./temp/output_resize.jpg', (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Imagem redimensionada')
            compress(pathOutputh, "./compressed/");
        }
    })
}

function compress(pathInput, pathOutputh) {

    compress_images(pathInput, pathOutputh, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
        function (error, completed, statistic) {
            console.log("-------------");
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log("-------------");

            fs.unlink(pathInput, (err) => {
                if (err) {
                    console.log(err)
                }
                else {
                    console.log(pathOutputh, " Apagado");
                }
            })
        }
    );
}

resize(path, './temp/output_resize.jpg', width);