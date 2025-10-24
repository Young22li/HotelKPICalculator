const totalRoomsInput = document.getElementById('totalRooms');
const roomsSoldInput = document.getElementById('roomsSold');
const totalRevenueInput = document.getElementById('totalRevenue');

const occupancyOutput = document.getElementById('occupancy');
const adrOutput = document.getElementById('adr');
const revparOutput = document.getElementById('revpar');

function formatCurrency(value) {
    return '$' + value.toFixed(2);
}

function formatPercentage(value) {
    return value.toFixed(2) + '%';
}

function calculateKPIs() {
    const totalRooms = parseFloat(totalRoomsInput.value) || 0;
    const roomsSold = parseFloat(roomsSoldInput.value) || 0;
    const totalRevenue = parseFloat(totalRevenueInput.value) || 0;

    if (totalRooms < roomsSold || totalRooms === 0) {
        occupancyOutput.textContent = 'N/A';
        adrOutput.textContent = 'N/A';
        revparOutput.textContent = 'N/A';
    }
    else if (roomsSold === 0) {
        adrOutput.textContent = 'N/A';
    }
    else{
        occupancy = (roomsSold / totalRooms) * 100;
        occupancyOutput.textContent = formatPercentage(occupancy);

        const adr = totalRevenue / roomsSold;
        adrOutput.textContent = formatCurrency(adr);

        const revpar = totalRevenue / totalRooms;
        revparOutput.textContent = formatCurrency(revpar);
    }
}

// Add event listeners for real-time updates
totalRoomsInput.addEventListener('input', calculateKPIs);
roomsSoldInput.addEventListener('input', calculateKPIs);
totalRevenueInput.addEventListener('input', calculateKPIs);

// Initial calculation
calculateKPIs();