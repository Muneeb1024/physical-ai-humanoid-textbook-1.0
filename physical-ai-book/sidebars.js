// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['intro', 'overview', 'getting-started'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2) - Weeks 1-5',
      items: [
        'module-1-ros2/intro',
        'module-1-ros2/ros2-fundamentals',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity) - Weeks 6-7',
      items: [
        'module-2-gazebo/intro',
        'module-2-gazebo/gazebo-simulation',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac™) - Weeks 8-10',
      items: [
        'module-3-nvidia-isaac/intro',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA) - Weeks 11-13',
      items: [
        'module-4-vla/intro',
        'module-4-vla/vla-models',
      ],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Interactive Elements',
      items: [
        'simulators',
        'code-examples',
        '3d-models',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Assessments & Progress',
      items: [
        'assessments',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'AI Assistant',
      items: [
        'ai-assistant',
        'faq',
      ],
      collapsed: true,
    },
  ],
};

export default sidebars;
