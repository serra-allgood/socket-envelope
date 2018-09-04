# SocketEnvelope
## Overview
SocketEnvelope is a React component implementation of the
WebSocket protocol. Unlike a lot of other implementations,
SocketEnvelope actually allows for _sending_ messages to the
server, not just reading messages.

## Installation
```
yarn add socket-envelope
```

## Usage
```javascript
import { SocketEnvelope } from 'socket-envelope';

<SocketEnvelope url={url}
                envelope={envelope}
                onMessage={this.onMessage}
                formatEnvelope={this.formatEnvelope} />
```
| attr           | type   |
|----------------|--------|
| url            | string |
| envelope       | object |
| onMessage      | func   |
| formatEnvelope | func   |

The way SocketEnvelope determines if it should send a message is
by comparing the `timestamp` property on `envelope`.

The onMessage handler will receive the message event, the payload
of which is accessible with `event.data`.

The formatEnvelope handler will receive the envelope object and
should return either a string or binary message.
