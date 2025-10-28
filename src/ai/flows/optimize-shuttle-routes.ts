'use server';

/**
 * @fileOverview An AI-powered tool to automatically optimize shuttle routes based on real-time passenger demand and traffic conditions.
 *
 * - optimizeShuttleRoutes - A function that optimizes shuttle routes.
 * - OptimizeShuttleRoutesInput - The input type for the optimizeShuttleRoutes function.
 * - OptimizeShuttleRoutesOutput - The return type for the optimizeShuttleRoutes function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OptimizeShuttleRoutesInputSchema = z.object({
  passengerDemand: z
    .string()
    .describe(
      'A JSON string containing real-time passenger demand data for each shuttle stop.'
    ),
  trafficConditions: z
    .string()
    .describe(
      'A JSON string containing real-time traffic conditions data for the shuttle routes.'
    ),
  currentRoutes: z
    .string()
    .describe(
      'A JSON string containing the current shuttle routes and schedules.'
    ),
});
export type OptimizeShuttleRoutesInput = z.infer<
  typeof OptimizeShuttleRoutesInputSchema
>;

const OptimizeShuttleRoutesOutputSchema = z.object({
  optimizedRoutes: z
    .string()
    .describe(
      'A JSON string containing the optimized shuttle routes and schedules.'
    ),
  reasoning: z
    .string()
    .describe('The AI’s reasoning for the route optimizations.'),
});
export type OptimizeShuttleRoutesOutput = z.infer<
  typeof OptimizeShuttleRoutesOutputSchema
>;

export async function optimizeShuttleRoutes(
  input: OptimizeShuttleRoutesInput
): Promise<OptimizeShuttleRoutesOutput> {
  return optimizeShuttleRoutesFlow(input);
}

const optimizeShuttleRoutesPrompt = ai.definePrompt({
  name: 'optimizeShuttleRoutesPrompt',
  input: {schema: OptimizeShuttleRoutesInputSchema},
  output: {schema: OptimizeShuttleRoutesOutputSchema},
  prompt: `You are an AI-powered tool that automatically optimizes shuttle routes based on real-time passenger demand and traffic conditions.

You will receive real-time passenger demand data, traffic conditions data, and the current shuttle routes and schedules. You will analyze this data and generate optimized shuttle routes and schedules to reduce wait times for students and improve the efficiency of the shuttle service.

Passenger Demand Data: {{{passengerDemand}}}
Traffic Conditions Data: {{{trafficConditions}}}
Current Routes and Schedules: {{{currentRoutes}}}

Provide the optimized routes and schedules in JSON format, along with a clear explanation of your reasoning for the changes.
`,
});

const optimizeShuttleRoutesFlow = ai.defineFlow(
  {
    name: 'optimizeShuttleRoutesFlow',
    inputSchema: OptimizeShuttleRoutesInputSchema,
    outputSchema: OptimizeShuttleRoutesOutputSchema,
  },
  async input => {
    const {output} = await optimizeShuttleRoutesPrompt(input);
    return output!;
  }
);
