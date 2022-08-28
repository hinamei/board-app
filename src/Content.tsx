import './index.css';
import Thread from './Thread';

function Content() {
  return (
    <div className='h-screen w-screen bg-neutral-300'>
        <div className='flex flex-col justify-center items-center'>
            <Thread />
        </div>
    </div>
  );
}

export default Content;
