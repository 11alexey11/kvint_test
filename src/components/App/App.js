import { useState } from 'react';
import useMountTransition from '../../hooks/useMountTransition';

import './index.scss';

const App = () => {
	const [isMounted, setIsMounted] = useState(true);
	const [isFetching, setIsFetching] = useState(false);
	const shouldRenderChild = useMountTransition(isMounted, 500);

	const handleClickButton = () => {
		setIsMounted(!isMounted);
		setIsFetching(!isFetching);
	};

	return (
		<div className='container'>
			{
				shouldRenderChild && (
					<button className={`btn ${isMounted ? 'appear' : 'disappear'}`} onClick={handleClickButton}>
						<span>Click me!</span>
					</button>
				)
			}	
		</div>
	);
}

export default App;
