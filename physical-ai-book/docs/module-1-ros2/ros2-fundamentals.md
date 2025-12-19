---
sidebar_position: 2
---

# ROS 2 Fundamentals

This section covers the core concepts and architecture of ROS 2 (Robot Operating System 2), which serves as the communication backbone for robotic applications.

## What is ROS 2?

ROS 2 (Robot Operating System 2) is not an actual operating system but rather a flexible framework for writing robotic software. It provides a collection of tools, libraries, and conventions that aim to simplify the task of creating complex and robust robotic behavior across a wide variety of robotic platforms.

Unlike its predecessor ROS 1, ROS 2 is built on DDS (Data Distribution Service) which provides better real-time performance, improved security, and enhanced scalability for complex robotic systems.

## Key Concepts

### Nodes
Nodes are the fundamental building blocks of ROS 2. Each node is a process that performs computation and communicates with other nodes through messages. Nodes can be written in different programming languages (C++, Python, etc.) and run on different machines.

### Topics
Topics are named buses over which nodes exchange messages. Publishers send messages to topics, and subscribers receive messages from topics. This creates a many-to-many relationship between publishers and subscribers.

### Services
Services provide a request/reply communication pattern. A service client sends a request to a service server, which processes the request and sends back a response.

### Actions
Actions are similar to services but are designed for long-running tasks. They provide feedback during execution and can be canceled.

## Architecture

ROS 2 uses a client library architecture where different programming languages can interact through DDS implementations. The main client libraries are:

- **rclcpp**: C++ client library
- **rclpy**: Python client library
- **rclnodejs**: JavaScript client library
- **rclc**: C client library

## DDS Implementations

ROS 2 supports multiple DDS implementations:

- **Fast DDS** (default): Developed by eProsima
- **Cyclone DDS**: Developed by ADLINK
- **RTI Connext DDS**: Commercial implementation
- **OpenSplice DDS**: Open-source implementation

## Quality of Service (QoS)

QoS settings allow fine-tuning of communication behavior between nodes, including:

- Reliability: Best effort vs. reliable delivery
- Durability: Volatile vs. transient local
- History: Keep last N messages vs. keep all messages
- Deadline: Maximum time between consecutive messages

## Practical Exercise

Create a simple ROS 2 workspace with a publisher and subscriber node that exchange messages containing sensor data. This exercise will help you understand the basic communication patterns in ROS 2.

1. Create a new ROS 2 package
2. Implement a publisher node that sends sensor readings
3. Implement a subscriber node that receives and processes the data
4. Configure QoS settings for real-time performance
5. Test the communication between nodes

## Next Steps

After mastering ROS 2 fundamentals, proceed to learn about nodes, topics, and services in detail, which will provide the foundation for building more complex robotic applications.