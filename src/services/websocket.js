let socket;

const initializeWebSocket = () => {
    socket = new WebSocket('wss://ws-us3.pusher.com/app/7d55ac978a3647512f45?protocol=7&client=js&version=7.0.6&flash=false');

    socket.onopen = () => console.log('WebSocket Connected');
    socket.onmessage = (message) => console.log('Message from server:', message.data);
    socket.onclose = () => console.log('WebSocket Closed');
    socket.onerror = (error) => console.error('WebSocket Error:', error);
};

const closeWebSocket = () => {
    if (socket) {
        socket.close();
        console.log('WebSocket Closed Manually');
    }
};

export { initializeWebSocket, closeWebSocket };
