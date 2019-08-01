# Livestream Periscope

Any number of iframes which link to live feeds can be added to this interface and all frames will automatically be resized to make best use of space.

## Usage

### `createFrame()`

Call `createFrame()` with a live feed URL as its only argument to create an iframe with the live feed.
e.g. `createFrame('http://10.35.212.45');`

### `deleteFrame()`

Call `deleteFrame()` with a live feed URL as its only argument to delete all iframes with the URL as their source.
e.g. `deleteFrame('http://10.35.212.45');`
