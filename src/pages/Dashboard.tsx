import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BarChart, TableIcon, Grid } from "lucide-react";
import GraphView from "@/components/dashboard/GraphView";
import TableView from "@/components/dashboard/TableView";
import CardView from "@/components/dashboard/CardView";

type ViewType = "graph" | "table" | "card";

const Dashboard: React.FC = () => {
  const [viewType, setViewType] = useState<ViewType>("graph");

  const renderView = () => {
    switch (viewType) {
      case "graph":
        return <GraphView />;
      case "table":
        return <TableView />;
      case "card":
        return <CardView />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="flex justify-end space-x-2">
          <Button
            variant={viewType === "graph" ? "default" : "outline"}
            onClick={() => setViewType("graph")}
          >
            <BarChart className="w-4 h-4 mr-2" />
            Graph View
          </Button>
          <Button
            variant={viewType === "table" ? "default" : "outline"}
            onClick={() => setViewType("table")}
          >
            <TableIcon className="w-4 h-4 mr-2" />
            Table View
          </Button>
          <Button
            variant={viewType === "card" ? "default" : "outline"}
            onClick={() => setViewType("card")}
          >
            <Grid className="w-4 h-4 mr-2" />
            Card View
          </Button>
        </div>
      </div>
      {renderView()}
    </div>
  );
};

export default Dashboard;
