// imageHelper.js
const imagePaths = {
    'B22705-1.jpg': require('../res/images/B22705-1.jpg'),
    'B22705-2.jpg': require('../res/images/B22705-2.jpg'),
    'B22713-1.jpg': require('../res/images/B22713-1.jpg'),
    'B22713-2.jpg': require('../res/images/B22713-2.jpg'),
    'BB5478-1.jpg': require('../res/images/BB5478-1.jpg'),
    'BB5478-2.jpg': require('../res/images/BB5478-2.jpg'),
    'CM7492-1.jpg': require('../res/images/CM7492-1.jpg'),
    'CM7492-2.jpg': require('../res/images/CM7492-2.jpg'),
    'CM7500-1.jpg': require('../res/images/CM7500-1.jpg'),
    'CM7500-2.jpg': require('../res/images/CM7500-2.jpg'),
    'D96635-1.jpg': require('../res/images/D96635-1.jpg'),
    'D96635-2.jpg': require('../res/images/D96635-2.jpg'),
    'EE6037-1.jpg': require('../res/images/EE6037-1.jpg'),
    'EE6037-2.jpg': require('../res/images/EE6037-2.jpg'),
    'EE6464-1.jpg': require('../res/images/EE6464-1.jpg'),
    'EE6464-2.jpg': require('../res/images/EE6464-2.jpg'),
    'EE8889-1.jpg': require('../res/images/EE8889-1.jpg'),
    'EE8889-2.jpg': require('../res/images/EE8889-2.jpg'),
    'EE8893-1.jpg': require('../res/images/EE8893-1.jpg'),
    'EE8893-2.jpg': require('../res/images/EE8893-2.jpg'),
    'EE8943-1.jpg': require('../res/images/EE8943-1.jpg'),
    'EE8943-2.jpg': require('../res/images/EE8943-2.jpg'),
    'EG4958-1.jpg': require('../res/images/EG4958-1.jpg'),
    'EG4958-2.jpg': require('../res/images/EG4958-2.jpg'),
    'EG4959-1.jpg': require('../res/images/EG4959-1.jpg'),
    'EG4959-2.jpg': require('../res/images/EG4959-2.jpg'),
    'FV9021-1.jpg': require('../res/images/FV9021-1.jpg'),
    'FV9021-2.jpg': require('../res/images/FV9021-2.jpg'),
    'FW2336-1.jpg': require('../res/images/FW2336-1.jpg'),
    'FW2336-2.jpg': require('../res/images/FW2336-2.jpg'),
    'FW2769-1.jpg': require('../res/images/FW2769-1.jpg'),
    'FW2769-2.jpg': require('../res/images/FW2769-2.jpg'),
    'FW2770-1.jpg': require('../res/images/FW2770-1.jpg'),
    'FW2770-2.jpg': require('../res/images/FW2770-2.jpg'),
    'FX5500-1.jpg': require('../res/images/FX5500-1.jpg'),
    'FX5500-2.jpg': require('../res/images/FX5500-2.jpg'),
    'FX5501-1.jpg': require('../res/images/FX5501-1.jpg'),
    'FX5501-2.jpg': require('../res/images/FX5501-2.jpg'),
    'FX5502-1.jpg': require('../res/images/FX5502-1.jpg'),
    'FX5502-2.jpg': require('../res/images/FX5502-2.jpg'),
    'FX5522-1.jpg': require('../res/images/FX5522-1.jpg'),
    'FX5522-2.jpg': require('../res/images/FX5522-2.jpg'),
    'FX5666-1.jpg': require('../res/images/FX5666-1.jpg'),
    'FX5666-2.jpg': require('../res/images/FX5666-2.jpg'),
    'FX6835-1.jpg': require('../res/images/FX6835-1.jpg'),
    'FX6835-2.jpg': require('../res/images/FX6835-2.jpg'),
    'FY5168-1.jpg': require('../res/images/FY5168-1.jpg'),
    'FY5168-2.jpg': require('../res/images/FY5168-2.jpg'),
    'FY5172-1.jpg': require('../res/images/FY5172-1.jpg'),
    'FY5172-2.jpg': require('../res/images/FY5172-2.jpg'),
    'FY5173-1.jpg': require('../res/images/FY5173-1.jpg'),
    'FY5173-2.jpg': require('../res/images/FY5173-2.jpg'),
    'FY7939-1.jpg': require('../res/images/FY7939-1.jpg'),
    'FY7939-2.jpg': require('../res/images/FY7939-2.jpg'),
    'FY9120-1.jpg': require('../res/images/FY9120-1.jpg'),
    'FY9120-2.jpg': require('../res/images/FY9120-2.jpg'),
    'FY9121-1.jpg': require('../res/images/FY9121-1.jpg'),
    'FY9121-2.jpg': require('../res/images/FY9121-2.jpg'),
    'FY9318-1.jpg': require('../res/images/FY9318-1.jpg'),
    'FY9318-2.jpg': require('../res/images/FY9318-2.jpg'),
    'FY9319-1.jpg': require('../res/images/FY9319-1.jpg'),
    'FY9319-2.jpg': require('../res/images/FY9319-2.jpg'),
    'FY9338-1.jpg': require('../res/images/FY9338-1.jpg'),
    'FY9338-2.jpg': require('../res/images/FY9338-2.jpg'),
    'FY9349-1.jpg': require('../res/images/FY9349-1.jpg'),
    'FY9349-2.jpg': require('../res/images/FY9349-2.jpg'),
    'FY9354-1.jpg': require('../res/images/FY9354-1.jpg'),
    'FY9354-2.jpg': require('../res/images/FY9354-2.jpg'),
    'FZ0145-1.jpg': require('../res/images/FZ0145-1.jpg'),
    'FZ0145-2.jpg': require('../res/images/FZ0145-2.jpg'),
    'G27637-1.jpg': require('../res/images/G27637-1.jpg'),
    'G27637-2.jpg': require('../res/images/G27637-2.jpg'),
    'G27639-1.jpg': require('../res/images/G27639-1.jpg'),
    'G27639-2.jpg': require('../res/images/G27639-2.jpg'),
    'G27706-1.jpg': require('../res/images/G27706-1.jpg'),
    'G27706-2.jpg': require('../res/images/G27706-2.jpg'),
    'G55574-1.jpg': require('../res/images/G55574-1.jpg'),
    'G55574-2.jpg': require('../res/images/G55574-2.jpg'),
    'GV7538-1.jpg': require('../res/images/GV7538-1.jpg'),
    'GV7538-2.jpg': require('../res/images/GV7538-2.jpg'),
    'GV7549-1.jpg': require('../res/images/GV7549-1.jpg'),
    'GV7549-2.jpg': require('../res/images/GV7549-2.jpg'),
    'GX0540-1.jpg': require('../res/images/GX0540-1.jpg'),
    'GX0540-2.jpg': require('../res/images/GX0540-2.jpg'),
    'GX0544-1.jpg': require('../res/images/GX0544-1.jpg'),
    'GX0544-2.jpg': require('../res/images/GX0544-2.jpg'),
    'GY4977-1.jpg': require('../res/images/GY4977-1.jpg'),
    'GY4977-2.jpg': require('../res/images/GY4977-2.jpg'),
    'GZ0525-1.jpg': require('../res/images/GZ0525-1.jpg'),
    'GZ0525-2.jpg': require('../res/images/GZ0525-2.jpg'),
    'GZ1014-1.jpg': require('../res/images/GZ1014-1.jpg'),
    'GZ1014-2.jpg': require('../res/images/GZ1014-2.jpg'),
    'GZ7039-1.jpg': require('../res/images/GZ7039-1.jpg'),
    'GZ7039-2.jpg': require('../res/images/GZ7039-2.jpg'),
    'H05246-1.jpg': require('../res/images/H05246-1.jpg'),
    'H05246-2.jpg': require('../res/images/H05246-2.jpg')
};

export function getImageSource(path) {
    return imagePaths[path];
}
