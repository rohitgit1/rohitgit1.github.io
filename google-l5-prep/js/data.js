// Google L5 Data Engineer Prep Portal - Comprehensive Dataset
const PREP_DATA = {
  // 90-Day Curated Schedule
  schedule: [
    // Phase 1: Days 1 - 30 (Foundations & Core Mastery)
    { day: 1, phase: 1, week: 1, title: "Arrays & Hashing: Two Sum & Frequency Maps", pillar: "dsa", focus: "Two Sum, HashMap frequency counting in Python", sql: "Basic Window: ROW_NUMBER() vs RANK()", design: "Row vs Columnar Storage: Parquet vs Postgres", estMinutes: 180 },
    { day: 2, phase: 1, week: 1, title: "Arrays & Hashing: Group Anagrams & Tuples as Keys", pillar: "dsa", focus: "Group Anagrams, sorting vs count array keys", sql: "DENSE_RANK() and Top-N per group", design: "OLTP vs OLAP Architecture & Access Patterns", estMinutes: 180 },
    { day: 3, phase: 1, week: 1, title: "Arrays & Hashing: Top K Frequent Elements", pillar: "dsa", focus: "Bucket Sort vs Min-Heap for Top K", sql: "Running Totals: SUM() OVER (PARTITION BY ... ORDER BY ...)", design: "Distributed Storage: GCS / HDFS block storage", estMinutes: 180 },
    { day: 4, phase: 1, week: 1, title: "Prefix Sums: Subarray Sum Equals K", pillar: "dsa", focus: "Prefix sum hash map pattern (continuous data)", sql: "Frame Clauses: ROWS BETWEEN 6 PRECEDING AND CURRENT ROW", design: "BigQuery Architecture: Dremel, Colossus, Borg", estMinutes: 180 },
    { day: 5, phase: 1, week: 1, title: "Array Products: Product of Array Except Self", pillar: "dsa", focus: "Left and right product accumulators in O(1) space", sql: "LEAD and LAG for time-series difference", design: "Partitioning vs Clustering in BigQuery", estMinutes: 180 },
    { day: 6, phase: 1, week: 1, title: "Two Pointers: Valid Palindrome & Container Water", pillar: "dsa", focus: "Two pointer convergence & greedy area maximization", sql: "Sessionization Part 1: Identifying session breaks", design: "Dimensional Modeling: Kimball Star vs Snowflake", estMinutes: 210 },
    { day: 7, phase: 1, week: 1, title: "Two Pointers: 3Sum & Edge Case Deduplication", pillar: "dsa", focus: "Sorting + Two pointer with duplicate skipping", sql: "Sessionization Part 2: Session ID generation with cumulative sum", design: "Slowly Changing Dimensions (SCD) Types 1, 2, 3", estMinutes: 210 },
    { day: 8, phase: 1, week: 2, title: "Sliding Window: Longest Substring Without Repeats", pillar: "dsa", focus: "Dynamic sliding window with last-seen character map", sql: "Handling Gaps & Islands in time series data", design: "SCD Types 4 and 6 (Mini-dimensions & Hybrid)", estMinutes: 180 },
    { day: 9, phase: 1, week: 2, title: "Sliding Window: Minimum Window Substring", pillar: "dsa", focus: "Need vs Have character frequency tracking", sql: "Self-Joins vs Window functions for cohort retention", design: "Fact Tables: Transaction, Periodic, Accumulating Snapshot", estMinutes: 180 },
    { day: 10, phase: 1, week: 2, title: "Sliding Window: Longest Repeating Character Replacement", pillar: "dsa", focus: "Window size - max frequency <= k condition", sql: "BigQuery Array Manipulation: UNNEST() and ARRAY_AGG()", design: "Denormalization vs Normalization trade-offs in Cloud DW", estMinutes: 180 },
    { day: 11, phase: 1, week: 2, title: "Stack: Valid Parentheses & Min Stack", pillar: "dsa", focus: "LIFO pattern, auxiliary min-tracker stack", sql: "BigQuery STRUCT and nested JSON querying", design: "Data Ingestion: Pull vs Push, Batch vs Micro-batch", estMinutes: 180 },
    { day: 12, phase: 1, week: 2, title: "Monotonic Stack: Daily Temperatures", pillar: "dsa", focus: "Monotonically decreasing stack for next greater element", sql: "Recursive CTEs for hierarchical & DAG tree queries", design: "Message Brokers: Pub/Sub Architecture & Ordering Keys", estMinutes: 180 },
    { day: 13, phase: 1, week: 2, title: "Monotonic Stack: Evaluate Reverse Polish Notation", pillar: "dsa", focus: "Expression parsing & token processing", sql: "Complex Anti-joins and NULL-safe joins", design: "Pub/Sub vs Kafka: Architecture & Partitioning Differences", estMinutes: 180 },
    { day: 14, phase: 1, week: 2, title: "Binary Search: Search in Rotated Sorted Array", pillar: "dsa", focus: "Identifying sorted half in rotated search space", sql: "Percentile Calculation: NTILE() and PERCENT_RANK()", design: "Change Data Capture (CDC): Debezium, WAL, Datastream", estMinutes: 210 },
    { day: 15, phase: 1, week: 3, title: "Binary Search: Find Minimum in Rotated Array & First/Last", pillar: "dsa", focus: "Boundary conditions in binary search", sql: "SQL Window Performance: Reducing shuffle in large tables", design: "System Design Archetype 1: CDC Pipeline to BigQuery", estMinutes: 210 },
    { day: 16, phase: 1, week: 3, title: "Linked Lists: Reverse & Merge Two Sorted Lists", pillar: "dsa", focus: "Pointer manipulation, dummy nodes, iterative reversal", sql: "Data Deduplication queries with QUALIFY in BigQuery", design: "System Design Archetype 1: Deep Dive on Exactly-Once CDC", estMinutes: 180 },
    { day: 17, phase: 1, week: 3, title: "Linked Lists: Reorder List & Fast/Slow Pointers", pillar: "dsa", focus: "Middle finding, reversal, and interleaved merging", sql: "Rolling 7-day, 30-day active user metric queries", design: "Storage Engines: LSM Trees vs B-Trees (Bigtable vs Postgres)", estMinutes: 180 },
    { day: 18, phase: 1, week: 3, title: "Linked Lists: Remove Nth Node from End", pillar: "dsa", focus: "Two-pointer gap offset pattern", sql: "Cumulative user acquisition & churn calculation", design: "Cloud Bigtable: Row Key Design & Hotspot Prevention", estMinutes: 180 },
    { day: 19, phase: 1, week: 3, title: "Phase 1 Drill: Timed Arrays & Two Pointers", pillar: "dsa", focus: "Solve 3 Mediums under 25-minute timer", sql: "Multi-touch attribution SQL query", design: "Google Cloud Spanner: TrueTime & External Consistency", estMinutes: 210 },
    { day: 20, phase: 1, week: 3, title: "Phase 1 Drill: Timed Stack & Sliding Windows", pillar: "dsa", focus: "Solve 3 Mediums under 25-minute timer", sql: "Funnel Analysis SQL: Multi-step conversion", design: "CAP Theorem & PACELC in Google Data Systems", estMinutes: 210 },
    { day: 21, phase: 1, week: 3, title: "Phase 1 Checkpoint: Mock Assessment 1", pillar: "review", focus: "Full Coding + SQL Mock simulation", sql: "Comprehensive SQL challenge", design: "Review Kimball Modeling & Storage trade-offs", estMinutes: 240 },
    // Phase 2: Days 22 - 60 (Graphs, Trees, Big Data Internals, Beam/Spark)
    { day: 22, phase: 2, week: 4, title: "Trees: Binary Tree Traversal & Max Depth", pillar: "dsa", focus: "DFS recursive vs iterative level-order BFS", sql: "Tree traversal in SQL using CTEs", design: "The Dataflow Model: Event Time vs Processing Time", estMinutes: 180 },
    { day: 23, phase: 2, week: 4, title: "Trees: Lowest Common Ancestor & Diameter", pillar: "dsa", focus: "Subtree result aggregation & boundary passing", sql: "Hierarchical reporting structures in SQL", design: "Watermarks, Allowed Lateness & Triggers in Apache Beam", estMinutes: 180 },
    { day: 24, phase: 2, week: 4, title: "Trees: Binary Tree Right Side View & Level Order", pillar: "dsa", focus: "Queue-based BFS level grouping", sql: "Window frame aggregates on time partitions", design: "Windowing in Apache Beam: Fixed, Sliding, Session", estMinutes: 180 },
    { day: 25, phase: 2, week: 4, title: "Trees: Validate Binary Search Tree & Serializer", pillar: "dsa", focus: "Min/max boundary passing in recursion", sql: "Schema evolution & JSON serialization queries", design: "Apache Beam Pipeline Architecture: PCollection & PTransform", estMinutes: 180 },
    { day: 26, phase: 2, week: 4, title: "Graphs: Number of Islands (Grid BFS/DFS)", pillar: "dsa", focus: "Matrix traversal, visited set vs in-place marking", sql: "Spatial grid queries & geohash aggregation", design: "System Design Archetype 2: Real-Time Clickstream Ingestion", estMinutes: 180 },
    { day: 27, phase: 2, week: 4, title: "Graphs: Clone Graph & Connected Components", pillar: "dsa", focus: "Graph deep copy with hash map mapping", sql: "Graph adjacency list representation in relational tables", design: "System Design Archetype 2: Handling Late Data & Skew", estMinutes: 180 },
    { day: 28, phase: 2, week: 4, title: "Graphs & DAGs: Course Schedule I (Cycle Detection)", pillar: "dsa", focus: "Directed graph cycle detection using 3-state DFS", sql: "Detecting circular dependencies in metadata tables", design: "Workflow Orchestration: Airflow vs Cloud Composer vs Temporal", estMinutes: 210 },
    { day: 29, phase: 2, week: 5, title: "Graphs & DAGs: Course Schedule II (Topological Sort)", pillar: "dsa", focus: "Kahn's Algorithm (in-degree queue) for DAG execution", sql: "DAG execution order query in SQL", design: "Data Pipeline Scheduling: Backfilling & Idempotent DAGs", estMinutes: 210 },
    { day: 30, phase: 2, week: 5, title: "Graphs & DAGs: Alien Dictionary (Lexicographical Order)", pillar: "dsa", focus: "Constructing DAG from ordered list + Topological sort", sql: "Custom sorting rules with CASE WHEN & Order keys", design: "Apache Spark Execution: Driver, Executors, Tasks, Stages", estMinutes: 210 },
    { day: 31, phase: 2, week: 5, title: "Graphs: Graph Valid Tree & Redundant Connection", pillar: "dsa", focus: "Union-Find (Disjoint Set Union) data structure", sql: "Entity resolution & duplicate customer mapping", design: "Spark Shuffle Mechanics: Disk Spill, Partitions, Network I/O", estMinutes: 180 },
    { day: 32, phase: 2, week: 5, title: "Heaps: Kth Largest Element in an Array", pillar: "dsa", focus: "Min-heap of size K vs QuickSelect O(N) average", sql: "Top-K per category using QUALIFY", design: "Spark Joins: Broadcast Hash Join vs Sort Merge Join", estMinutes: 180 },
    { day: 33, phase: 2, week: 5, title: "Heaps: Find Median from Data Stream", pillar: "dsa", focus: "Two-heap pattern (Max-heap lower half, Min-heap upper)", sql: "Approximating medians: APPROX_QUANTILES in BigQuery", design: "Handling Data Skew in Spark: Salting Keys & Broadcasts", estMinutes: 210 },
    { day: 34, phase: 2, week: 5, title: "Heaps: Merge K Sorted Lists", pillar: "dsa", focus: "Priority queue pointer tracking across K streams", sql: "Merging time-series event streams in SQL", design: "Spark Memory Management: Execution vs Storage Memory", estMinutes: 210 },
    { day: 35, phase: 2, week: 5, title: "Intervals: Merge Intervals & Insert Interval", pillar: "dsa", focus: "Sort by start time + overlap boundary merging", sql: "Merging overlapping date periods in SQL", design: "System Design Archetype 3: YouTube View Count Pipeline", estMinutes: 180 },
    { day: 36, phase: 2, week: 6, title: "Intervals: Non-overlapping Intervals & Meeting Rooms II", pillar: "dsa", focus: "Greedy end-time sorting and Min-heap room tracking", sql: "Resource concurrency & maximum overlapping sessions", design: "System Design Archetype 3: Deduplication & Eventual Consistency", estMinutes: 210 },
    { day: 37, phase: 2, week: 6, title: "Tries: Implement Trie (Prefix Tree)", pillar: "dsa", focus: "TrieNode class, insertion, prefix search in Python", sql: "Prefix search optimization & inverted indexes", design: "System Design Archetype 4: Real-time Ad Click Fraud Detection", estMinutes: 180 },
    { day: 38, phase: 2, week: 6, title: "Tries & Backtracking: Word Search II & Subsets", pillar: "dsa", focus: "Trie + DFS grid backtracking, pruning", sql: "Combinatorial rollups: GROUP BY CUBE / ROLLUP", design: "Sliding Window Aggregations in Apache Beam/Flink", estMinutes: 210 },
    { day: 39, phase: 2, week: 6, title: "Greedy: Task Scheduler (Cooling Period)", pillar: "dsa", focus: "Frequency counting + mathematical formula for idle slots", sql: "Batch task scheduling with fair resource allocation", design: "System Design Archetype 5: ML Feature Store Architecture", estMinutes: 180 },
    { day: 40, phase: 2, week: 6, title: "Cache Design: LRU Cache Implementation", pillar: "dsa", focus: "Hash map + Doubly Linked List in Python", sql: "Cache hit/miss ratio calculation queries", design: "Online (Low-latency) vs Offline (DW) Storage in Feature Stores", estMinutes: 210 },
    { day: 41, phase: 2, week: 6, title: "Phase 2 Checkpoint: Advanced DSA & Spark Mock", pillar: "review", focus: "Timed DAG + Heap coding assessment", sql: "Complex data engineering SQL drill", design: "Spark vs Beam Architecture Defense Mock", estMinutes: 240 },
    // Phase 3: Days 42 - 90 (System Design Mastery, Google Scenarios, G&L)
    { day: 42, phase: 3, week: 7, title: "DE System Design: The 45-Minute Google Framework", pillar: "design", focus: "Scope, Scale, High-Level, Bottlenecks, Governance", sql: "Review SQL query optimization execution plans", design: "Mastering Scale Estimations: QPS, Throughput, Storage", estMinutes: 180 },
    { day: 43, phase: 3, week: 7, title: "System Design 6: Financial Reconciliation & Idempotency", pillar: "design", focus: "Two-Phase Commits, Idempotent Sinks, Dead Letter Queues", sql: "Double-entry ledger reconciliation query", design: "Exactly-Once vs At-Least-Once Delivery Semantics", estMinutes: 210 },
    { day: 44, phase: 3, week: 7, title: "System Design 7: GDPR Right to be Forgotten at Scale", pillar: "design", focus: "Tombstone deletion in Parquet/BigQuery, Lineage tracking", sql: "Cascade deletion auditing queries", design: "Immutable File Mutation: Copy-on-Write vs Merge-on-Read", estMinutes: 210 },
    { day: 45, phase: 3, week: 7, title: "System Design 8: Real-Time IoT Telemetry & Alerting", pillar: "design", focus: "Dynamic thresholding, out-of-order handling, Bigtable time-series", sql: "Anomaly detection with rolling standard deviations in SQL", design: "Time-series storage engines: Bigtable vs InfluxDB vs ClickHouse", estMinutes: 210 },
    { day: 46, phase: 3, week: 7, title: "System Design 9: Large-Scale Migration (Hadoop to GCP)", pillar: "design", focus: "Dual-write architecture, shadow testing, validation", sql: "Data reconciliation & diff verification queries", design: "Zero-Downtime Data Cutover Strategies", estMinutes: 210 },
    { day: 47, phase: 3, week: 7, title: "System Design 10: Unified Google Search Log Pipeline", pillar: "design", focus: "PB-scale ingestion, privacy masking, multi-region replication", sql: "High-cardinality aggregation in BigQuery", design: "Multi-Region BigQuery & Cross-Region GCS Replication", estMinutes: 210 },
    { day: 48, phase: 3, week: 7, title: "Googliness & Leadership: STAR Story 1 & 2", pillar: "leadership", focus: "Draft: Technical Conflict & Ambiguity (L5 level)", sql: "SQL speed drill: 5 queries in 30 mins", design: "Review System Design Bottlenecks (Skew & Hotspotting)", estMinutes: 180 },
    { day: 49, phase: 3, week: 8, title: "Googliness & Leadership: STAR Story 3 & 4", pillar: "leadership", focus: "Draft: Major Production Outage & Mentorship", sql: "SQL speed drill: 5 queries in 30 mins", design: "Review Storage Engine Trade-offs (Spanner vs Bigtable vs BQ)", estMinutes: 180 },
    { day: 50, phase: 3, week: 8, title: "Googliness & Leadership: STAR Story 5 & 6", pillar: "leadership", focus: "Draft: Cross-Team Influence & Failure/Post-Mortem", sql: "SQL speed drill: 5 queries in 30 mins", design: "Review Beam Watermarks & Triggers Edge Cases", estMinutes: 180 },
    { day: 51, phase: 3, week: 8, title: "Googliness & Leadership: STAR Story 7 & 8", pillar: "leadership", focus: "Draft: Driving Architectural Standards & Innovation", sql: "SQL speed drill: 5 queries in 30 mins", design: "Review Data Governance, Lineage & Dataplex", estMinutes: 180 },
    { day: 52, phase: 3, week: 8, title: "Full System Design Mock 1: Ad-Click Fraud", pillar: "design", focus: "Full 45-minute verbal walkthrough & diagramming", sql: "Qualify & Window Function mastery check", design: "Critique against Google L5 evaluation rubrics", estMinutes: 210 },
    { day: 53, phase: 3, week: 8, title: "Full System Design Mock 2: YouTube View Counter", pillar: "design", focus: "Full 45-minute verbal walkthrough & diagramming", sql: "Sessionization mastery check", design: "Critique against Google L5 evaluation rubrics", estMinutes: 210 },
    { day: 54, phase: 3, week: 8, title: "Full System Design Mock 3: CDC to BigQuery", pillar: "design", focus: "Full 45-minute verbal walkthrough & diagramming", sql: "Nested JSON & Array unnesting mastery check", design: "Critique against Google L5 evaluation rubrics", estMinutes: 210 },
    { day: 55, phase: 3, week: 8, title: "Coding Mock 1: DAG Scheduling & Heaps", pillar: "dsa", focus: "2 Medium problems under 45 mins with verbal communication", sql: "Complex multi-table join drill", design: "Review System Design 6 & 7", estMinutes: 210 },
    { day: 56, phase: 3, week: 9, title: "Coding Mock 2: Sliding Window & Intervals", pillar: "dsa", focus: "2 Medium problems under 45 mins with verbal communication", sql: "Cumulative cohort retention drill", design: "Review System Design 8 & 9", estMinutes: 210 },
    { day: 57, phase: 3, week: 9, title: "Full G&L Mock Session", pillar: "leadership", focus: "Practice all 8 STAR stories out loud with 2-minute pitch", sql: "SQL review: Edge cases with NULL and partition skew", design: "Review System Design 10", estMinutes: 210 },
    { day: 58, phase: 3, week: 9, title: "Final Polish: Weak Area Remediation", pillar: "review", focus: "Redo any failed DSA problems from Days 1-56", sql: "Review BigQuery dialect specifics", design: "Review DDIA key chapters (5, 6, 7, 10, 11)", estMinutes: 240 },
    { day: 59, phase: 3, week: 9, title: "Final Full Loop Simulation: Coding + Design + G&L", pillar: "review", focus: "Simulate back-to-back rounds with timer", sql: "Simulate 45-minute SQL and Modeling round", design: "Simulate 45-minute System Design round", estMinutes: 300 },
    { day: 60, phase: 3, week: 9, title: "Mid-Term Milestone Gating Evaluation", pillar: "review", focus: "Comprehensive Readiness Score Calculation", sql: "Final SQL benchmark", design: "Final Architecture benchmark", estMinutes: 240 }
  ],

  // 75 High-Yield Python DSA Problems Curated for Google Data Engineers
  dsaProblems: [
    {
      id: "dsa-1",
      title: "Two Sum",
      category: "Arrays & Hashing",
      difficulty: "Easy",
      deRelevance: "Fundamental lookup pattern. Key for fast in-memory joins and entity matching.",
      problemStatement: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`. You may assume each input has exactly one solution.",
      pythonStarter: "def twoSum(nums: list[int], target: int) -> list[int]:\n    # Implement here\n    pass",
      optimalSolution: "def twoSum(nums: list[int], target: int) -> list[int]:\n    seen = {}\n    for i, num in enumerate(nums):\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        seen[num] = i\n    return []",
      timeComplexity: "O(N) single pass",
      spaceComplexity: "O(N) hash map",
      interviewerTips: "Mention single-pass vs two-pass. Discuss memory overhead when N is billions of records (why streaming requires distributed hashing or partition by key)."
    },
    {
      id: "dsa-2",
      title: "Subarray Sum Equals K",
      category: "Arrays & Hashing",
      difficulty: "Medium",
      deRelevance: "Essential for financial reconciliation, rolling window balance calculations, and log metric analysis.",
      problemStatement: "Given an array of integers `nums` and an integer `k`, return the total number of subarrays whose sum equals to `k`.",
      pythonStarter: "def subarraySum(nums: list[int], k: int) -> int:\n    # Implement prefix sum with hash map\n    pass",
      optimalSolution: "def subarraySum(nums: list[int], k: int) -> int:\n    count = 0\n    current_sum = 0\n    prefix_sums = {0: 1}\n    for num in nums:\n        current_sum += num\n        if current_sum - k in prefix_sums:\n            count += prefix_sums[current_sum - k]\n        prefix_sums[current_sum] = prefix_sums.get(current_sum, 0) + 1\n    return count",
      timeComplexity: "O(N)",
      spaceComplexity: "O(N)",
      interviewerTips: "Crucial edge case: initialize prefix_sums with {0: 1} to handle subarrays starting at index 0. Note that sliding window does NOT work if array contains negative numbers."
    },
    {
      id: "dsa-3",
      title: "Course Schedule II (Pipeline DAG Dependency Order)",
      category: "Graphs & DAGs",
      difficulty: "Medium",
      deRelevance: "#1 Most Asked for DEs! Directly models Airflow/Dataflow pipeline task dependency resolution.",
      problemStatement: "There are `numCourses` courses labeled `0` to `numCourses - 1`. You are given `prerequisites[i] = [a, b]` meaning you must take course `b` before `a`. Return the ordering of courses you should take to finish all courses. If impossible, return empty array.",
      pythonStarter: "from collections import deque, defaultdict\n\ndef findOrder(numCourses: int, prerequisites: list[list[int]]) -> list[int]:\n    # Implement Kahn's Topological Sort\n    pass",
      optimalSolution: "from collections import deque, defaultdict\n\ndef findOrder(numCourses: int, prerequisites: list[list[int]]) -> list[int]:\n    graph = defaultdict(list)\n    in_degree = [0] * numCourses\n    for dest, src in prerequisites:\n        graph[src].append(dest)\n        in_degree[dest] += 1\n        \n    queue = deque([i for i in range(numCourses) if in_degree[i] == 0])\n    order = []\n    \n    while queue:\n        node = queue.popleft()\n        order.append(node)\n        for neighbor in graph[node]:\n            in_degree[neighbor] -= 1\n            if in_degree[neighbor] == 0:\n                queue.append(neighbor)\n                \n    return order if len(order) == numCourses else []",
      timeComplexity: "O(V + E) vertices and edges",
      spaceComplexity: "O(V + E) for adjacency list + in-degree",
      interviewerTips: "Explicitly relate this to building an execution plan for an ETL/ELT pipeline. Highlight how Kahn's algorithm detects circular dependencies automatically (cycle detection)."
    },
    {
      id: "dsa-4",
      title: "Find Median from Data Stream",
      category: "Heaps",
      difficulty: "Hard",
      deRelevance: "Core for streaming analytics, real-time percentile monitoring (P50/P99 latency calculations).",
      problemStatement: "Design a data structure that supports adding numbers from a data stream and finding the median of all elements seen so far in O(1) or O(log N) time.",
      pythonStarter: "import heapq\n\nclass MedianFinder:\n    def __init__(self):\n        pass\n    def addNum(self, num: int) -> None:\n        pass\n    def findMedian(self) -> float:\n        pass",
      optimalSolution: "import heapq\n\nclass MedianFinder:\n    def __init__(self):\n        self.small = [] # Max-heap (invert values)\n        self.large = [] # Min-heap\n\n    def addNum(self, num: int) -> None:\n        # Push to max-heap\n        heapq.heappush(self.small, -num)\n        \n        # Ensure every element in small <= every element in large\n        if self.small and self.large and (-self.small[0] > self.large[0]):\n            val = -heapq.heappop(self.small)\n            heapq.heappush(self.large, val)\n            \n        # Balance sizes (size diff <= 1)\n        if len(self.small) > len(self.large) + 1:\n            val = -heapq.heappop(self.small)\n            heapq.heappush(self.large, val)\n        elif len(self.large) > len(self.small):\n            val = heapq.heappop(self.large)\n            heapq.heappush(self.small, -val)\n\n    def findMedian(self) -> float:\n        if len(self.small) > len(self.large):\n            return float(-self.small[0])\n        return (-self.small[0] + self.large[0]) / 2.0",
      timeComplexity: "addNum: O(log N), findMedian: O(1)",
      spaceComplexity: "O(N) to store stream elements",
      interviewerTips: "Explain how in distributed streaming (Beam/Spark), exact median is expensive so algorithms like T-Digest or HLL (HyperLogLog) are used for approximate streaming percentiles."
    },
    {
      id: "dsa-5",
      title: "Merge Intervals",
      category: "Intervals",
      difficulty: "Medium",
      deRelevance: "Essential for session merging, resource allocation, and scheduling backfill execution windows.",
      problemStatement: "Given an array of `intervals` where `intervals[i] = [start, end]`, merge all overlapping intervals, and return an array of non-overlapping intervals.",
      pythonStarter: "def merge(intervals: list[list[int]]) -> list[list[int]]:\n    # Implement here\n    pass",
      optimalSolution: "def merge(intervals: list[list[int]]) -> list[list[int]]:\n    intervals.sort(key=lambda x: x[0])\n    merged = []\n    for interval in intervals:\n        if not merged or merged[-1][1] < interval[0]:\n            merged.append(interval)\n        else:\n            merged[-1][1] = max(merged[-1][1], interval[1])\n    return merged",
      timeComplexity: "O(N log N) sorting step",
      spaceComplexity: "O(N) for output list",
      interviewerTips: "Note how sorting by start time converts a 2D geometric comparison problem into a linear scan. Mention parallel chunk merging if data spans multiple distributed machines."
    },
    {
      id: "dsa-6",
      title: "Top K Frequent Elements in Stream",
      category: "Heaps",
      difficulty: "Medium",
      deRelevance: "Top search queries, trending hashtags, high-frequency fraud identifiers in real-time pipelines.",
      problemStatement: "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.",
      pythonStarter: "from collections import Counter\nimport heapq\n\ndef topKFrequent(nums: list[int], k: int) -> list[int]:\n    # Implement using Min-Heap of size K or Bucket Sort\n    pass",
      optimalSolution: "from collections import Counter\nimport heapq\n\ndef topKFrequent(nums: list[int], k: int) -> list[int]:\n    count = Counter(nums)\n    heap = []\n    for num, freq in count.items():\n        heapq.heappush(heap, (freq, num))\n        if len(heap) > k:\n            heapq.heappop(heap)\n    return [num for freq, num in heap]",
      timeComplexity: "O(N log K)",
      spaceComplexity: "O(N + K)",
      interviewerTips: "Discuss Bucket Sort alternative for O(N) linear time when frequency <= N. Discuss Count-Min Sketch for true infinite distributed streaming at Google scale."
    },
    {
      id: "dsa-7",
      title: "LRU Cache (Least Recently Used)",
      category: "Design",
      difficulty: "Medium",
      deRelevance: "Underpins database buffer pools, caching metadata in pipelines, and lookup enrichment layers.",
      problemStatement: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache with `get(key)` and `put(key, value)` in O(1) time complexity.",
      pythonStarter: "class LRUCache:\n    def __init__(self, capacity: int):\n        pass\n    def get(self, key: int) -> int:\n        pass\n    def put(self, key: int, value: int) -> None:\n        pass",
      optimalSolution: "class Node:\n    def __init__(self, key=0, val=0):\n        self.key, self.val = key, val\n        self.prev = self.next = None\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.cap = capacity\n        self.cache = {}\n        self.head, self.tail = Node(), Node()\n        self.head.next, self.tail.prev = self.tail, self.head\n\n    def _remove(self, node):\n        prev, nxt = node.prev, node.next\n        prev.next, nxt.prev = nxt, prev\n\n    def _add_to_tail(self, node):\n        prev = self.tail.prev\n        prev.next = node\n        node.prev = prev\n        node.next = self.tail\n        self.tail.prev = node\n\n    def get(self, key: int) -> int:\n        if key in self.cache:\n            node = self.cache[key]\n            self._remove(node)\n            self._add_to_tail(node)\n            return node.val\n        return -1\n\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache:\n            self._remove(self.cache[key])\n        node = Node(key, value)\n        self.cache[key] = node\n        self._add_to_tail(node)\n        if len(self.cache) > self.cap:\n            lru = self.head.next\n            self._remove(lru)\n            del self.cache[lru.key]",
      timeComplexity: "O(1) for both get and put",
      spaceComplexity: "O(capacity)",
      interviewerTips: "In Python, mention `collections.OrderedDict` exists, but writing the explicit Doubly Linked List + Hash Map proves raw computer science mastery for Google L5."
    }
  ],

  // Advanced SQL & Data Modeling Challenges
  sqlChallenges: [
    {
      id: "sql-1",
      title: "User Sessionization (Gaps & Inactivity Detection)",
      category: "Window Functions & State",
      difficulty: "Hard",
      scenario: "Given a clickstream event table `user_events(user_id, event_time, event_type)`, group events into sessions. A new session starts if more than 30 minutes (1800 seconds) have elapsed since the user's previous event. Assign a unique `session_id` per session.",
      sampleSchema: "user_events (user_id INT, event_time TIMESTAMP, page_id STRING)",
      solutionQuery: `WITH event_lags AS (
  SELECT 
    user_id,
    event_time,
    page_id,
    TIMESTAMP_DIFF(event_time, LAG(event_time) OVER (PARTITION BY user_id ORDER BY event_time), SECOND) AS idle_seconds
  FROM user_events
),
session_starts AS (
  SELECT 
    user_id,
    event_time,
    page_id,
    CASE 
      WHEN idle_seconds IS NULL OR idle_seconds > 1800 THEN 1 
      ELSE 0 
    END AS is_new_session
  FROM event_lags
)
SELECT 
  user_id,
  event_time,
  page_id,
  CONCAT(user_id, '_', SUM(is_new_session) OVER (PARTITION BY user_id ORDER BY event_time ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)) AS session_id
FROM session_starts
ORDER BY user_id, event_time;`,
      explanation: "This classic two-step pattern: 1) Identify boundary triggers with LAG(), 2) Accumulate boundary triggers with a cumulative SUM() window function to create increasing session IDs."
    },
    {
      id: "sql-2",
      title: "BigQuery Unnesting & Repeated Struct Aggregation",
      category: "Modern Cloud DW (BigQuery)",
      difficulty: "Medium",
      scenario: "In an e-commerce order table `orders`, each row contains an `order_id` and a repeated `items` array of STRUCTs: `ARRAY<STRUCT<item_id STRING, category STRING, price NUMERIC, quantity INT64>>`. Find the top 3 best-selling product categories by total revenue for each month.",
      sampleSchema: "orders (order_id STRING, order_date DATE, items ARRAY<STRUCT<item_id STRING, category STRING, price NUMERIC, quantity INT64>>)",
      solutionQuery: `WITH flattened_items AS (
  SELECT 
    DATE_TRUNC(order_date, MONTH) AS order_month,
    item.category,
    item.price * item.quantity AS revenue
  FROM orders,
  UNNEST(items) AS item
),
category_revenue AS (
  SELECT 
    order_month,
    category,
    SUM(revenue) AS total_revenue
  FROM flattened_items
  GROUP BY 1, 2
)
SELECT 
  order_month,
  category,
  total_revenue,
  rank_num
FROM (
  SELECT 
    order_month,
    category,
    total_revenue,
    DENSE_RANK() OVER (PARTITION BY order_month ORDER BY total_revenue DESC) AS rank_num
  FROM category_revenue
)
WHERE rank_num <= 3
ORDER BY order_month DESC, rank_num ASC;`,
      explanation: "Uses BigQuery's UNNEST to flatten repeated structures without an explicit JOIN table, followed by DENSE_RANK to select top 3 categories per partition."
    },
    {
      id: "sql-3",
      title: "SCD Type 2 Dimension Historical State Reconstruction",
      category: "Kimball Modeling",
      difficulty: "Hard",
      scenario: "Given an SCD Type 2 table `dim_customer_history(customer_id, tier, effective_date, end_date, is_current)` and a transactional table `fact_purchases(purchase_id, customer_id, purchase_date, amount)`, calculate total revenue generated by each customer tier at the exact moment the purchase happened.",
      sampleSchema: "dim_customer_history (customer_id INT, tier STRING, effective_date DATE, end_date DATE, is_current BOOL)\nfact_purchases (purchase_id INT, customer_id INT, purchase_date DATE, amount NUMERIC)",
      solutionQuery: `SELECT 
  d.tier,
  COUNT(f.purchase_id) AS total_transactions,
  SUM(f.amount) AS total_revenue,
  ROUND(AVG(f.amount), 2) AS avg_transaction_value
FROM fact_purchases f
JOIN dim_customer_history d
  ON f.customer_id = d.customer_id
  AND f.purchase_date >= d.effective_date
  AND (f.purchase_date < d.end_date OR (d.is_current = TRUE AND d.end_date IS NULL))
GROUP BY d.tier
ORDER BY total_revenue DESC;`,
      explanation: "Shows how to properly join facts to SCD Type 2 dimensions using point-in-time range conditions, handling currently active rows where end_date may be NULL or a sentinel date (e.g. 9999-12-31)."
    }
  ],

  // 10 Classic Google DE System Design Blueprints
  systemDesigns: [
    {
      id: "sys-1",
      title: "Real-Time YouTube Video View Counter & Trending Engine",
      scale: "2 Billion active users, 500 hours video uploaded/min, 100M views/sec peak",
      latencySLA: "< 1 second for user-facing count, < 30 seconds for global trending feed",
      architectureTiers: {
        ingestion: "Google Cloud Pub/Sub (sharded by video_id with ordering keys)",
        streamingEngine: "Google Cloud Dataflow (Apache Beam) with sliding 10-minute windows for velocity and fixed 1-minute aggregations",
        storage: "Cloud Bigtable (Hot point lookups with row key: video_id#reversed_timestamp) + BigQuery (Cold analytical warehouse)",
        serving: "Distributed Memory Cache (Memcached/Redis) + gRPC View Service"
      },
      bottlenecksAndSolutions: [
        { issue: "Write Hotspotting (Viral Video)", solution: "Salt video_id with random shard key (video_id_0..9), aggregate locally in Dataflow workers, then perform second-stage merge before writing to Bigtable." },
        { issue: "View Fraud / Duplicate Views", solution: "Maintain a Bloom Filter or Redis HyperLogLog keyed by (video_id, user_hash, IP) with 15-minute TTL to deduplicate spam hits before counting." },
        { issue: "Discrepancy between Live Count & Analytical Count", solution: "Eventual consistency: Live view count is an estimate (approximate counter); batch reconciler runs nightly in BigQuery to audit against ad fraud guidelines." }
      ]
    },
    {
      id: "sys-2",
      title: "Change Data Capture (CDC) Pipeline to BigQuery with Zero Downtime",
      scale: "50,000 transactions/sec OLTP (Cloud SQL Postgres), 50TB database",
      latencySLA: "Near real-time sync (< 5 seconds end-to-end latency to BigQuery)",
      architectureTiers: {
        ingestion: "PostgreSQL WAL (Write-Ahead Log) -> Debezium / Google Cloud Datastream -> Cloud Pub/Sub",
        streamingEngine: "Cloud Dataflow (Apache Beam) with BigQuery Storage Write API (Streaming Insert with At-Least-Once / Exactly-Once)",
        storage: "BigQuery with Raw Change Log Table + Partitioned/Clustered Current State Table via MERGE or BigQuery Dynamic Views",
        serving: "Looker / Internal BI dashboards querying BigQuery partitioned by date and clustered on entity_id"
      },
      bottlenecksAndSolutions: [
        { issue: "High DML Quotas on BigQuery MERGE", solution: "Avoid running continuous MERGE statements. Instead, append all changes to a raw changelog table, and use BigQuery Storage Write API with deduplication keys, or query via a view using QUALIFY ROW_NUMBER() OVER (PARTITION BY id ORDER BY timestamp DESC) = 1." },
        { issue: "Out-of-Order CDC Events", solution: "Enforce Pub/Sub ordering keys based on database primary key, and carry source transaction LSN (Log Sequence Number) to guarantee strictly increasing versions." },
        { issue: "Schema Evolution in OLTP", solution: "Avro/Protobuf schema registry with backward and forward compatibility checks. Dataflow drops invalid schemas into a Dead Letter Queue (DLQ) in Cloud Storage." }
      ]
    },
    {
      id: "sys-3",
      title: "Real-Time Ad Click Fraud Detection Engine",
      scale: "500,000 click events/sec, sub-100ms fraud verdict for ad billing",
      latencySLA: "Verdict within 200ms; retrospective billing invalidation within 24h",
      architectureTiers: {
        ingestion: "Google Cloud Pub/Sub with partitioned topics",
        streamingEngine: "Apache Flink / Google Cloud Dataflow with stateful CEP (Complex Event Processing)",
        storage: "Cloud Bigtable (Low latency state: IP click frequency, Device fingerprint history) + GCS (Raw parquet archive)",
        serving: "Fast rule engine + ML Scoring Model (TF Serving via gRPC side-input)"
      },
      bottlenecksAndSolutions: [
        { issue: "High State Size in Streaming Engine", solution: "State TTL: Keep only 24 hours of state in RocksDB local state store; spill older aggregations to Bigtable." },
        { issue: "DDoS Click Storms", solution: "Backpressure handling with Dataflow autoscaling; rate limiting and IP subnet throttling before stream processing." }
      ]
    }
  ],

  // Flashcards for Office Micro-Drills (5-minute study intervals)
  flashcards: [
    { id: "fc-1", category: "BigQuery", q: "What is the difference between Partitioning and Clustering in BigQuery?", a: "Partitioning splits tables into physical segments based on a date/timestamp or integer range (pruning partitions reduces bytes scanned and cost). Clustering physically sorts data within each partition by up to 4 columns (enhances filter/aggregation performance and co-locates related data)." },
    { id: "fc-2", category: "Apache Beam", q: "What is the difference between Event Time and Processing Time?", a: "Event Time is the timestamp when the event actually occurred on the client/device. Processing Time is the timestamp when the event is processed by a worker in the data pipeline. Skew between them is tracked using Watermarks." },
    { id: "fc-3", category: "Distributed Systems", q: "What is an Idempotent Pipeline Sink?", a: "An idempotent sink ensures that executing the write operation multiple times with identical inputs produces the same result as executing it once (e.g., upsert by primary key, or unique deduplication token), guaranteeing Exactly-Once semantics even over At-Least-Once transport." },
    { id: "fc-4", category: "Spark Internals", q: "What causes a Spark Shuffle Spill, and how do you fix it?", a: "Spill happens when intermediate data during a shuffle (aggregation, join, sort) exceeds executor memory and must be written to disk. Fix it by increasing executor memory, increasing spark.sql.shuffle.partitions to reduce partition size, or eliminating data skew using salting." },
    { id: "fc-5", category: "Kimball Modeling", q: "What is an Accumulating Snapshot Fact Table?", a: "A fact table used to model processes with definite milestones or lifecycles (e.g., order fulfillment: Placed -> Paid -> Shipped -> Delivered). Unlike transaction facts, rows in accumulating snapshots are updated as each lifecycle milestone is completed." },
    { id: "fc-6", category: "Google Cloud", q: "When should you choose Cloud Bigtable over Cloud Spanner?", a: "Choose Bigtable for petabyte-scale, high-throughput NoSQL key-value/columnar reads/writes with single-digit millisecond latency (e.g., time-series, IoT, telemetry). Choose Spanner when you require strict relational ACID transactions, SQL querying, and global consistency across multiple regions." },
    { id: "fc-7", category: "Python Internals", q: "What is the Big-O time complexity of `dict` operations in Python and why?", a: "Average O(1) for lookup, insert, and delete because Python dictionaries use a compact hash table with open addressing (quadratic probing). Worst case is O(N) during catastrophic hash collisions or resizing." },
    { id: "fc-8", category: "Pub/Sub", q: "How do Pub/Sub Ordering Keys work and what is their drawback?", a: "Messages published with the same ordering key are delivered to subscribers in the order they were received by Pub/Sub. Drawback: If a single message fails to acknowledge, subsequent messages for that key are blocked, which can introduce pipeline backpressure." }
  ],

  // 8 Googliness & Leadership (L5) STAR Prompts
  leadershipPrompts: [
    { id: "gl-1", competency: "Navigating Ambiguity", title: "Unstructured Problem Definition", prompt: "Tell me about a time you were given a critical data problem with ambiguous requirements and no clear architecture. How did you break it down, validate assumptions, and deliver an L5 solution?" },
    { id: "gl-2", competency: "Technical Leadership & Conflict", title: "Disagreement on Core Architecture", prompt: "Describe a situation where you had a fundamental disagreement with a senior engineer or tech lead on pipeline design or tech stack selection. How did you resolve it with data and maintain team alignment?" },
    { id: "gl-3", competency: "Ownership & Post-Mortem", title: "Major Pipeline Failure / Data Outage", prompt: "Describe the worst production outage or data corruption issue you experienced. How did you triage under pressure, lead the recovery, and design permanent systemic preventative guardrails?" },
    { id: "gl-4", competency: "Mentorship & Team Uplift", title: "Leveling Up Engineering Standards", prompt: "How have you improved the technical bar of your team? Give a specific example of mentoring an engineer or introducing engineering best practices (testing, code reviews, automated CI/CD for pipelines)." },
    { id: "gl-5", competency: "Cross-Functional Influence", title: "Driving Alignment without Authority", prompt: "Tell me about a time you had to persuade upstream software engineering teams or downstream business stakeholders to change their data models, APIs, or schemas." },
    { id: "gl-6", competency: "Cost & Scalability Optimization", title: "High-ROI Architectural Overhaul", prompt: "Share an example where you identified massive inefficiency, pipeline lag, or cloud expenditure in your data platform and architected an optimization that saved significant cost or latency." },
    { id: "gl-7", competency: "Delivering Under Constraints", title: "Aggressive Deadlines & Technical Debt", prompt: "How did you manage a project where business deadlines forced trade-offs between speed and architectural perfection? How did you pay down the technical debt afterwards?" },
    { id: "gl-8", competency: "Googliness & Ethics", title: "Doing the Right Thing for User Privacy / Security", prompt: "Describe a time you advocated for data privacy (e.g., PII masking, access governance, auditability) when other stakeholders preferred shortcuts." }
  ]
};
