const letters = 'abcdefghijklmnopqrstuvwxyz';

const title = 'foofighters';

export function App() {
  return (
    <div className='bg-black flex justify-center h-screen'>
      <span
        className='uppercase h-fit w-fit text-4xl text-white'
        data-value={title}
        onMouseEnter={event => {
          let iterations = 0;
          const interval = setInterval(() => {
            event.target.innerText = event.target.innerText
              .split('')
              .map((letter, index) => {
                if (index < iterations) {
                  return event.target.dataset.value[index];
                }
                return letters[Math.floor(Math.random() * 26)];
              })
              .join('');

            if (iterations > event.target.dataset.value.length) {
              clearInterval(interval);
            }

            iterations += 1 / 3;
          }, 30);
        }}
      >
        {title}
      </span>
    </div>
  );
}
