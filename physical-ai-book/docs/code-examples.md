---
sidebar_position: 2
---

# Code Examples

This section provides executable code examples that demonstrate key concepts throughout the Physical AI & Humanoid Robotics course. All examples are designed to be run directly within the textbook interface.

## Interactive Code Environment

### Features
- **Execute in Place**: Run code examples directly in the textbook
- **Visual Output**: See results and visualizations immediately
- **Editable**: Modify examples to experiment with different parameters
- **Saveable**: Bookmark your modified examples for later reference

## Module-Specific Examples

### Module 1: ROS 2 Examples
Examples for Robot Operating System 2 concepts:

```python
# Simple ROS 2 Publisher Example
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        timer_period = 0.5  # seconds
        self.timer = self.create_timer(timer_period, self.timer_callback)
        self.i = 0

    def timer_callback(self):
        msg = String()
        msg.data = 'Hello World: %d' % self.i
        self.publisher_.publish(msg)
        self.get_logger().info('Publishing: "%s"' % msg.data)
        self.i += 1

def main(args=None):
    rclpy.init(args=args)
    minimal_publisher = MinimalPublisher()
    rclpy.spin(minimal_publisher)
    minimal_publisher.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Module 2: Simulation Examples
Examples for Gazebo and Unity simulation:

```cpp
// Gazebo Model Plugin Example
#include <gazebo/gazebo.hh>
#include <gazebo/physics/physics.hh>
#include <gazebo/common/common.hh>

namespace gazebo
{
  class ModelPush : public ModelPlugin
  {
    public: void Load(physics::ModelPtr _parent, sdf::ElementPtr /*_sdf*/)
    {
      // Store the model pointer for convenience
      this->model = _parent;

      // Create the animation
      gazebo::common::PoseAnimationPtr anim(
          // Name the animation, attach it to the model, and set the duration
          new gazebo::common::PoseAnimation("test", _parent, 10.0, false));

      gazebo::common::PoseKeyFrame *key;

      // Set starting location of the model
      key = anim->CreateKeyFrame(0);
      key->Translation(ignition::math::Vector3d(0, 0, 0));
      key->Rotation(ignition::math::Quaterniond(0, 0, 0));

      // Set ending location of the model
      key = anim->CreateKeyFrame(5.0);
      key->Translation(ignition::math::Vector3d(5, 0, 0));
      key->Rotation(ignition::math::Quaterniond(0, 0, 0));

      key = anim->CreateKeyFrame(10.0);
      key->Translation(ignition::math::Vector3d(5, 0, 0));
      key->Rotation(ignition::math::Quaterniond(0, 0, 0));

      // Set the animation on the model
      this->model->SetAnimation(anim);
    }

    private: physics::ModelPtr model;
  };

  GZ_REGISTER_MODEL_PLUGIN(ModelPush)
}
```

### Module 3: AI Integration Examples
Examples for NVIDIA Isaac integration:

```python
# Isaac ROS Perception Pipeline Example
import rclpy
from rclpy.node import Node
from sensor_msgs.msg import Image, CameraInfo
from vision_msgs.msg import Detection2DArray
import cv2
from cv_bridge import CvBridge

class PerceptionNode(Node):
    def __init__(self):
        super().__init__('perception_node')
        self.subscription = self.create_subscription(
            Image,
            'camera/image_raw',
            self.image_callback,
            10)
        self.publisher = self.create_publisher(
            Detection2DArray,
            'detections',
            10)
        self.bridge = CvBridge()

    def image_callback(self, msg):
        cv_image = self.bridge.imgmsg_to_cv2(msg, "bgr8")

        # Example: Simple color-based detection
        hsv = cv2.cvtColor(cv_image, cv2.COLOR_BGR2HSV)
        lower_red = np.array([0, 50, 50])
        upper_red = np.array([10, 255, 255])
        mask = cv2.inRange(hsv, lower_red, upper_red)

        # Process detections
        detections = self.process_detections(mask)

        # Publish results
        self.publisher.publish(detections)

def main(args=None):
    rclpy.init(args=args)
    perception_node = PerceptionNode()
    rclpy.spin(perception_node)
    perception_node.destroy_node()
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Module 4: VLA Examples
Examples for Vision-Language-Action integration:

```python
# VLA Model Integration Example
import torch
import numpy as np
from transformers import CLIPProcessor, CLIPModel
import rospy
from sensor_msgs.msg import Image
from geometry_msgs.msg import Pose

class VLAModel:
    def __init__(self):
        # Load pre-trained vision-language model
        self.clip_model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
        self.clip_processor = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

        # Initialize action generation network
        self.action_generator = self.initialize_action_network()

    def process_vision_language(self, image, text_command):
        # Process visual input
        inputs = self.clip_processor(text=[text_command], images=image, return_tensors="pt", padding=True)
        outputs = self.clip_model(**inputs)

        # Generate action sequence
        action_sequence = self.generate_action(outputs)
        return action_sequence

    def generate_action(self, vision_language_features):
        # Map vision-language features to robot actions
        action = self.action_generator(vision_language_features)
        return action

# Example usage
vla = VLAModel()
# image = get_camera_image()  # from robot's camera
# command = "Pick up the red cube"
# action_sequence = vla.process_vision_language(image, command)
```

## Running Examples

### In-Browser Execution
1. Locate the code example in the textbook
2. Click the "Run" button to execute
3. View output in the embedded terminal or visualization panel
4. Modify the code to experiment with different parameters

### Local Execution
For more complex examples that require additional dependencies:

1. Copy the example code
2. Set up the appropriate development environment for the module
3. Run using the corresponding framework (ROS 2, Gazebo, Isaac, etc.)

## Best Practices

### Experimentation
- Modify parameters to understand their effects
- Try different inputs to see how systems respond
- Combine examples to create more complex behaviors

### Troubleshooting
- Check that all required dependencies are installed
- Verify correct ROS 2 workspace setup for ROS examples
- Ensure simulation environments are properly configured

### Integration
- Use examples as building blocks for your own projects
- Combine concepts from different modules
- Adapt examples to your specific robotic platform

## Contributing Examples

If you develop interesting variations of the examples, consider sharing them with the community through the GitHub repository associated with this textbook.

## Next Steps

After exploring these code examples, proceed to the practical exercises for each module to apply these concepts in more complex scenarios. The examples serve as building blocks for the larger projects you'll develop throughout the course.