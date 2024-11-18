let differences = [
    { x: 100, y: 200 }, // 图片1中的差异点坐标
    { x: 300, y: 150 }  // 图片2中的差异点坐标
];

let userDifferences = [];

function checkDifference() {
    let image1 = document.getElementById('image1');
    let image2 = document.getElementById('image2');

    for (let diff of differences) {
        if (!userDifferences.includes(diff)) {
            alert('还有差异点没找到！');
            return;
        }
    }

    alert('恭喜你，全部找到了！');
}

document.getElementById('image1').addEventListener('click', function(event) {
    let rect = this.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    // 检查点击位置是否为差异点
    for (let diff of differences) {
        if (Math.abs(x - diff.x) < 10 && Math.abs(y - diff.y) < 10) {
            userDifferences.push(diff);
            alert('找到一个差异点！');
            break;
        }
    }
});

document.getElementById('image2').addEventListener('click', function(event) {
    let rect = this.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;

    // 检查点击位置是否为差异点
    for (let diff of differences) {
        if (Math.abs(x - diff.x) < 10 && Math.abs(y - diff.y) < 10) {
            userDifferences.push(diff);
            alert('找到一个差异点！');
            break;
        }
    }
});