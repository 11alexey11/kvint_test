import { useState } from 'react';
import useMountTransition from '../../hooks/useMountTransition';
import Lottie from 'react-lottie';

import animationData from '../../lottie/mixture.json';

import './index.scss';

const App = () => {
	const [isMounted, setIsMounted] = useState(true);
	const [isFetching, setIsFetching] = useState(false);
	const shouldRenderChild = useMountTransition(isMounted, 1000);

	const handleClickButton = () => {
		setIsMounted(!isMounted);
		setIsFetching(!isFetching);

		new Promise((resolve) => setTimeout(() => resolve({ code: 200 }), 3000))
			.then(() => {
				setIsFetching(false);
			});
	};

	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData
	};

	return (
		<div className='container'>
			{
				shouldRenderChild && (
					<button className={`btn ${isMounted ? 'appear' : 'disappear'}`} onClick={ handleClickButton }>
						<span>Click me!</span>
					</button>
				)
			}
			{
				!shouldRenderChild && isFetching && (
					<Lottie  isClickToPauseDisabled options={defaultOptions} width={250} height={250} />
				)
			}
			{
				!shouldRenderChild && !isFetching &&
				(
					<div className='dialog appear'>
						<span className='dialog__bold'>Привет</span>
						<span>чем могу помочь?</span>
					</div>
				)
			}
		</div>
	);
}

export default App;
