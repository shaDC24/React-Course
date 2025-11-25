import dayjs from "dayjs";

export function getTimePercentage(estimatedDeliveryTimeMs,orderTimeMs) {
    let totalDeliveryTimeMs=estimatedDeliveryTimeMs-orderTimeMs;
    let timePassedMs=dayjs().valueOf()-orderTimeMs;
    timePassedMs=0.3*totalDeliveryTimeMs; // For testing purpose only
    let progressPercentage=Math.min((timePassedMs/totalDeliveryTimeMs)*100,100);
    return progressPercentage;
}
