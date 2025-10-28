"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Bot, GitBranch, TrafficCone, Users } from "lucide-react";

import { getOptimizedRoutes } from "@/app/actions";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const initialState = {
  message: "",
  data: null,
  fieldErrors: {},
};

const defaultPassengerDemand = JSON.stringify(
  [
    { stop: "Central Library", demand: 85 },
    { stop: "Engineering Block", demand: 120 },
    { stop: "Student Union", demand: 95 },
  ],
  null,
  2
);

const defaultTrafficConditions = JSON.stringify(
  [
    { route: "Library to Engineering", congestion: "high" },
    { route: "Engineering to Union", congestion: "low" },
  ],
  null,
  2
);

const defaultCurrentRoutes = JSON.stringify(
  {
    shuttle_1: {
      route: ["Central Library", "Engineering Block", "Student Union"],
      frequency_minutes: 15,
    },
  },
  null,
  2
);

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Optimizing..." : "Optimize Routes"}
      {!pending && <Bot className="ml-2 h-4 w-4" />}
    </Button>
  );
}

export function AiOptimizerForm() {
  const [state, formAction] = useActionState(getOptimizedRoutes, initialState);

  return (
    <form action={formAction} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <div className="space-y-6">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="text-primary" /> Passenger Demand
            </CardTitle>
            <CardDescription>
              Real-time passenger data for each stop (JSON format).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor="passengerDemand" className="sr-only">Passenger Demand</Label>
            <Textarea
              id="passengerDemand"
              name="passengerDemand"
              rows={8}
              defaultValue={defaultPassengerDemand}
            />
            {state.fieldErrors?.passengerDemand && <p className="text-sm font-medium text-destructive mt-2">{state.fieldErrors.passengerDemand}</p>}
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrafficCone className="text-primary" /> Traffic Conditions
            </CardTitle>
            <CardDescription>
              Real-time traffic conditions on routes (JSON format).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor="trafficConditions" className="sr-only">Traffic Conditions</Label>
            <Textarea
              id="trafficConditions"
              name="trafficConditions"
              rows={8}
              defaultValue={defaultTrafficConditions}
            />
             {state.fieldErrors?.trafficConditions && <p className="text-sm font-medium text-destructive mt-2">{state.fieldErrors.trafficConditions}</p>}
          </CardContent>
        </Card>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="text-primary" /> Current Routes
            </CardTitle>
            <CardDescription>
              Current shuttle routes and schedules (JSON format).
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Label htmlFor="currentRoutes" className="sr-only">Current Routes</Label>
            <Textarea
              id="currentRoutes"
              name="currentRoutes"
              rows={8}
              defaultValue={defaultCurrentRoutes}
            />
             {state.fieldErrors?.currentRoutes && <p className="text-sm font-medium text-destructive mt-2">{state.fieldErrors.currentRoutes}</p>}
          </CardContent>
        </Card>

        <SubmitButton />

        {state.message && state.data === null && (
            <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{state.message}</AlertDescription>
            </Alert>
        )}
      </div>

      {/* Output Section */}
      <div className="space-y-6">
        <Card className="shadow-lg h-full">
          <CardHeader>
            <CardTitle>AI-Optimized Results</CardTitle>
            <CardDescription>
              The AI will generate optimized routes and reasoning here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {state.data ? (
              <div className="space-y-6">
                <Alert variant="default" className="bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
                    <AlertTitle className="text-green-800 dark:text-green-300">Success!</AlertTitle>
                    <AlertDescription className="text-green-700 dark:text-green-400">{state.message}</AlertDescription>
                </Alert>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">Optimized Routes</h3>
                  <pre className="p-4 bg-secondary rounded-md text-sm text-secondary-foreground overflow-x-auto">
                    {state.data.optimizedRoutes}
                  </pre>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Reasoning</h3>
                  <div className="p-4 bg-secondary rounded-md text-sm text-secondary-foreground">
                    <p>{state.data.reasoning}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg h-96">
                <Bot className="h-16 w-16 text-muted-foreground" />
                <p className="mt-4 text-muted-foreground">
                  Results will appear here after optimization.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </form>
  );
}
