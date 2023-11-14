git init
git branch -M main
git add .
git commit -m "episode-02-04"

git remote add origin git@github.com:kiranreddyplr/namaste-react2nd-lastepisode.git
git push -u origin main

Two types of Export /Import

Default Export/Import

export Default component;
import component from 'path';


Named export/import

export const component;
import component from 'path';

React will do efficient DOM manupulation.It has virtual DOM for DOM manupulation
it has diff algoritham it make DOM manupulation

React Fiber


Hooks-> hooks are normal js functions
1. useState() -Super powerfull state variable in react
2. useEffect() 

When ever a state variable changes react will re-render the variable

shimmer UI -> if API is loading time we need to load with shimmer UI