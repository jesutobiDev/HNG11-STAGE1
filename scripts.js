document.addEventListener('DOMContentLoaded', () => {
    function updateTime() {
        const now = new Date();
        const localTime = now.toLocaleTimeString();
        const day = now.toLocaleDateString('en-US', { weekday: 'long' });

        document.querySelector('[data-testid="currentTimeUTC"]').textContent = localTime;
        document.querySelector('[data-testid="currentDay"]').textContent = day;
    }

    updateTime();
    setInterval(updateTime, 1000);
});
