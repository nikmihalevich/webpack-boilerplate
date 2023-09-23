import React, { useEffect, useState } from 'react';

/**
 * Component for testing ErrorBoundary
 * @constructor
 */
export const BugButton = () => {
	const [error, setError] = useState(false);

	const onThrow = () => setError(true);

	useEffect(() => {
		if (error) {
			throw new Error();
		}
	}, [error]);

	return (
		<button type="button" onClick={onThrow}>
			Bug!
		</button>
	);
};
