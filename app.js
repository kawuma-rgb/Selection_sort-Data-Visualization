const container = document.getElementById('container');
const array = [
  34, 2, 1, 55, 0, 2, 94, 12, 60, 5, 
  8, 50, 20, 30, 100, 80, 42, 61, 33, 77, 
  23, 68, 17, 92, 28, 38, 4, 63, 9, 18, 
  51, 64, 45, 25, 76, 49, 86, 79, 74, 70, 
  24, 69, 47, 56, 29, 75, 67, 59, 48, 10, 
  57, 26, 22, 72, 66, 31, 39, 53, 35, 62, 
  36, 41, 65, 73, 11, 32, 37, 71, 44, 52, 
  27, 78, 58, 93, 46, 40, 16, 15, 65, 14, 
  13, 19, 29, 85, 21, 84, 83, 82, 81, 80, 
  60, 50, 66, 56, 30, 53, 25, 45, 11, 17, 
  9, 10, 77, 64, 18, 39, 8, 76, 71, 59, 
  20, 70, 49, 33, 62, 67, 43, 65, 12, 23

];
colors= ['red','yellow','blue','orange']

// Create bars for visualization
function createBars() {
  array.forEach((value) => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value * 5}px`;
    container.appendChild(bar);
  });
}

// Selection sort visualization
async function selectionSort() {
  const bars = document.querySelectorAll('.bar');
  let newLength = array.length

  for (let i = 0; i < newLength - 1; i++) {
    let minIndex = i;

    // Highlight the current bar
    bars[i].classList.add('current');

    for (let j = i + 1; j < array.length; j++) {
      bars[j].classList.add('current');

      if (array[j] < array[minIndex]) {
        if (minIndex !== i) {
          bars[minIndex].classList.remove('minimum');
        }
        minIndex = j;
        bars[minIndex].classList.add('minimum');
      }

      await pause(100); // Pause for animation
      bars[j].classList.remove('current');
    }

    // Swap the elements
    if (minIndex !== i) {
      await swap(bars[i], bars[minIndex]);
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }

    // Finalize the sorted bar
    bars[i].classList.remove('current', 'minimum');
    bars[i].style.backgroundColor = 'green';
  }

  // Mark the last bar as sorted
  let bar = document.querySelectorAll('.bar');
  bar.classList.add('sorted')
  bars[array.length - 1].style.backgroundColor = 'green';
}

// Swap two bars
function swap(bar1, bar2) {
  return new Promise((resolve) => {
    const tempHeight = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = tempHeight;
    setTimeout(() => resolve(), 0); // Delay for animation
  });
}

// Pause function
function pause(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Start sorting
function startSorting() {
  selectionSort();
}

// Initialize bars
createBars();
