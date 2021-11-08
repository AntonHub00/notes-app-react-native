import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from './store';

// Using these hooks instead of the "default" ones make them easier to use in
// the components because we don't need to pass "RootState" and "Dispatch" types
// every time we want to get the state or dispatch an action.
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
