class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute, cabType) {
        this.baseFare = baseFare;
        this.costPerKilometer = costPerKilometer;
        this.costPerMinute = costPerMinute;
        this.cabType = cabType;
    }

    calculatePrice(distance, duration) {
        let distanceCost = distance * this.costPerKilometer;
        let timeCost = duration * this.costPerMinute;

        // Adjust pricing based on cab type
        if (this.cabType === 'Bike') {
            distanceCost *= 1.2; // 20% increase for UberX
        } else if (this.cabType === 'Auto') {
            timeCost *= 1.5; // 50% increase for UberBlack
        } else if (this.cabType === 'Car') {
            timeCost *= 2; // 50% increase for UberBlack
        }
        const totalCost = this.baseFare + distanceCost + timeCost;

        return totalCost;
    }
}

// Example usage
const uberXCalculator = new UberPriceCalculator(5, 1.5, 0.2, 'Bike');
const uberBlackCalculator = new UberPriceCalculator(8, 2, 0.3, 'Car');

const distanceTraveled = 20; // in kilometers
const durationInMinutes = 15; // in minutes

const uberXPrice = uberXCalculator.calculatePrice(distanceTraveled, durationInMinutes);
const uberBlackPrice = uberBlackCalculator.calculatePrice(distanceTraveled, durationInMinutes);

console.log(`UberX Price: Rs.${uberXPrice.toFixed(2)}`);
console.log(`UberBlack Price: Rs.${uberBlackPrice.toFixed(2)}`);
