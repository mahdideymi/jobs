import createHistory from 'history/createBrowserHistory'
const history = createHistory();
export default history;

export function forwardTo(location: string) {
    history.push(location);
}