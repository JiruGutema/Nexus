import Card from "../../components/Card/Card";
import StatusCard from "../../components/StatusCard/StatusCard";
import Task from "../../components/Task/Task";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="status-cards">
        <StatusCard
          title="E-commerce Platform"
          description="Building a modern online shopping experience"
          number="2"
        />
        <StatusCard
          title="E-commerce Platform"
          description="Building a modern online shopping experience"
          number="4"
        />
        <StatusCard
          title="E-commerce Platform"
          description="Building a modern online shopping experience"
          number="9"
        />
        <StatusCard
          title="E-commerce Platform"
          description="Building a modern online shopping experience"
          number="9"
        />
      </div>

      <div className="home-cards">
        <Card
          title="E-commerce Platform"
          description="Building a modern online shopping experience"
          date="2/15/2024"
        />
        <Card
          title="E-commerce Platform"
          description="Building a modern online shopping experience"
          date="2/15/2024"
        />
        <Card
          title="E-commerce Platform"
          description="Building a modern online shopping experience"
          date="2/15/2024"
        />
      </div>
      <div className="recentTasks">
    <h1>Recent Tasks</h1>
      <Task
          title="E-commerce Platform"
          description="Building a modern online shopping experience"
          date="2/15/2024"
        />
        <Task
          title="E-commerce Platform"
          description="Building a modern online shopping experience"
          date="2/15/2024"
        />
        <Task
          title="E-commerce Platform"
          description="Building a modern online shopping experience"
          date="2/15/2024"
        />
      </div>
    </div>
  );
}

export default Home;
