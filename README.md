# Space Explorer

A command-line tool for exploring space-related data from various APIs.

## Features

- **ISS Tracking**: Track the International Space Station's current location in real-time
- **NASA Astronomy Picture of the Day**: View NASA's daily featured astronomy image and description
- **Upcoming Space Launches**: Get information about upcoming rocket launches with optional filtering

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Ahmed-2451/space-explorer.git
cd space-explorer
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Set up your NASA API key:
```bash
export NASA_API_KEY="your_api_key_here"
```
If you don't set an API key, the application will use the demo key with limited requests.

## Usage

```bash
node index.js [command] [options]
```

### Available Commands

- `apod`: Fetch NASA's Astronomy Picture of the Day
  ```bash
  node index.js apod
  ```

- `iss`: Track the International Space Station location (updates every 10 seconds)
  ```bash
  node index.js iss
  ```

- `launches`: View upcoming space launches with optional status filter
  ```bash
  node index.js launches
  node index.js launches Go  # Filter launches by "Go" status
  ```

## APIs Used

- [NASA API](https://api.nasa.gov/) - For Astronomy Picture of the Day
- [Open Notify](http://open-notify.org/) - For ISS location tracking
- [The Space Devs Launch Library](https://thespacedevs.com/llapi) - For upcoming launch information

## Testing

Run the test suite:

```bash
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.# space-explorer