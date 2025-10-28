"use server";

import { optimizeShuttleRoutes, OptimizeShuttleRoutesInput, OptimizeShuttleRoutesOutput } from "@/ai/flows/optimize-shuttle-routes";

export type OptimizeFormState = {
    message: string;
    data: OptimizeShuttleRoutesOutput | null;
    fieldErrors: Record<string, string | undefined>;
}

export async function getOptimizedRoutes(
    prevState: OptimizeFormState,
    formData: FormData
): Promise<OptimizeFormState> {
    
    const input: OptimizeShuttleRoutesInput = {
        passengerDemand: formData.get("passengerDemand") as string,
        trafficConditions: formData.get("trafficConditions") as string,
        currentRoutes: formData.get("currentRoutes") as string,
    };

    if (!input.passengerDemand || !input.trafficConditions || !input.currentRoutes) {
        return {
            message: "All fields are required. Please provide data in JSON format.",
            data: null,
            fieldErrors: {
                passengerDemand: !input.passengerDemand ? "This field is required." : undefined,
                trafficConditions: !input.trafficConditions ? "This field is required." : undefined,
                currentRoutes: !input.currentRoutes ? "This field is required." : undefined,
            }
        };
    }

    try {
        const result = await optimizeShuttleRoutes(input);
        return {
            message: "Routes optimized successfully.",
            data: result,
            fieldErrors: {}
        };
    } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        return {
            message: `Optimization failed: ${errorMessage}`,
            data: null,
            fieldErrors: {}
        };
    }
}
