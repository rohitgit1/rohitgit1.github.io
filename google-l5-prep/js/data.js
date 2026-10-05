// Google L5 Prep Portal - Comprehensive Multi-Role Dataset
const PREP_DATA = {
  // Strategic Google Roles Radar (Matching 5+ Yr Data Background)
  targetRoles: [
    {
      id: "role-de",
      title: "Senior Data Engineer (L5)",
      organization: "Core Data / Ads / Cloud / YouTube",
      oddsRating: "Moderate (6.5/10)",
      barDifficulty: "High",
      compensationRange: "$280k - $380k USD / ₹65L - ₹95L INR",
      cheatCode: "Balanced bar. Lower DSA bar than pure SWE, but high expectations on Distributed System Design, BigQuery/Beam internals, and Kimball modeling.",
      interviewRounds: [
        { name: "Round 1: Python Coding", desc: "LeetCode Mediums (Focus: DAGs, Heaps, Intervals, Sliding Window, HashMaps)" },
        { name: "Round 2: Data Coding & Algorithms", desc: "Data processing algorithms, custom aggregators, topological sorting" },
        { name: "Round 3: Advanced SQL & Data Modeling", desc: "Complex window functions, sessionization, Kimball dimensional schemas (SCD 1-6)" },
        { name: "Round 4: Distributed Data System Design", desc: "Real-time streaming vs batch, Pub/Sub, Dataflow, Bigtable, BigQuery, data skew, exactly-once" },
        { name: "Round 5: Googliness & Leadership (G&L)", desc: "L5 behavioral: navigating ambiguity, cross-team influence, outage post-mortems" }
      ],
      strengthsNeeded: { dsa: 7, sql: 9, systemDesign: 9, cloud: 8, businessMetrics: 6, clientFacing: 4 },
      googleCareersQuery: "https://www.google.com/about/careers/applications/jobs/results/?q=%22Data%20Engineer%22&level=MID_LEVEL&level=SENIOR_LEVEL"
    },
    {
      id: "role-bie",
      title: "Business Intelligence Engineer / Analytics Engineer (L5)",
      organization: "Finance / People Ops / Google Cloud GTM / Devices",
      oddsRating: "High (8.5/10) - STRONGEST TROJAN HORSE",
      barDifficulty: "Moderate",
      compensationRange: "$240k - $340k USD / ₹55L - ₹80L INR",
      cheatCode: "THE BACKDOOR ROUTE: Minimal to zero hard LeetCode! Interviews focus heavily on Advanced SQL, Data Warehouse Modeling, Python data manipulation (Pandas/ETL), and metric design. Once inside Google for 12 months, internal transfer to DE or SWE is standard.",
      interviewRounds: [
        { name: "Round 1: Advanced SQL & Warehousing", desc: "Aggregations, CTEs, Window functions, BigQuery partitioning, query optimization" },
        { name: "Round 2: Data Modeling & Architecture", desc: "Star schema, snowflake, metrics layer, automated dimensional reporting, ETL/ELT pipelines" },
        { name: "Round 3: Practical Python Scripting", desc: "Data extraction, API consumption, data cleaning, automated validation (not esoteric graph algorithms)" },
        { name: "Round 4: Analytical Problem Solving", desc: "Designing KPIs, root-cause metric anomalies, business experimentation" },
        { name: "Round 5: Googliness & Leadership", desc: "Stakeholder management, presenting technical findings to directors, cross-functional impact" }
      ],
      strengthsNeeded: { dsa: 4, sql: 10, systemDesign: 7, cloud: 7, businessMetrics: 9, clientFacing: 7 },
      googleCareersQuery: "https://www.google.com/about/careers/applications/jobs/results/?q=%22Business%20Intelligence%22%20OR%20%22Analytics%20Engineer%22"
    },
    {
      id: "role-cse",
      title: "Customer Solutions Engineer - Data & Analytics (L5)",
      organization: "Google Cloud / Enterprise GTM",
      oddsRating: "Very High (8.8/10) - HIGH HIRING VOLUME",
      barDifficulty: "Moderate",
      compensationRange: "$260k - $360k USD / ₹60L - ₹85L INR",
      cheatCode: "HUGE ADVANTAGE FOR 5+ YR PROFILES: Google Cloud hires aggressively here. They want engineers who understand BigQuery, Looker, Spark, and pipeline architecture to build high-stakes reference solutions for Fortune 500 clients. Coding is practical, not academic DSA.",
      interviewRounds: [
        { name: "Round 1: Practical Coding / Scripting", desc: "Python data scripts, API integrations, debugging real data pipeline issues" },
        { name: "Round 2: Cloud Data Architecture", desc: "Designing client migrations from Teradata/Snowflake/Hadoop to Google Cloud BigQuery/Dataproc" },
        { name: "Round 3: Troubleshooting & Scenarios", desc: "Debugging slow queries, pipeline failures, data corruption under real-world pressure" },
        { name: "Round 4: Technical Communication & Solutioning", desc: "Explaining complex architectural trade-offs to senior client engineers and leadership" },
        { name: "Round 5: Googliness & Leadership", desc: "Customer empathy, handling conflict, cross-functional collaboration with Google product teams" }
      ],
      strengthsNeeded: { dsa: 5, sql: 8, systemDesign: 8, cloud: 10, businessMetrics: 7, clientFacing: 9 },
      googleCareersQuery: "https://www.google.com/about/careers/applications/jobs/results/?q=%22Customer%20Solutions%20Engineer%22%20data"
    },
    {
      id: "role-pso",
      title: "Cloud Consultant / Technical Architect - Data & AI (L5)",
      organization: "Google Cloud Professional Services (PSO)",
      oddsRating: "High (8.0/10)",
      barDifficulty: "Moderate-High",
      compensationRange: "$270k - $370k USD / ₹65L - ₹90L INR",
      cheatCode: "PURE ARCHITECTURE & IMPACT: Focuses on enterprise data modernization. Almost zero algorithmic graph/tree puzzles. Heavy emphasis on Google Cloud Big Data stack (BigQuery, Dataflow, Dataproc, Composer, Pub/Sub) and enterprise governance.",
      interviewRounds: [
        { name: "Round 1: Data Architecture & System Design", desc: "Enterprise Data Platform design: Data mesh, lakehouse, real-time analytics" },
        { name: "Round 2: GCP Big Data Deep Dive", desc: "Internal mechanics of BigQuery, Dataflow streaming semantics, Cloud Spanner vs Bigtable" },
        { name: "Round 3: Data Migration & Modernization", desc: "Legacy on-prem to cloud migration strategy, dual-run architectures, validation" },
        { name: "Round 4: Delivery & Consulting Acumen", desc: "Project scoping, managing delivery risk, technical thought leadership" },
        { name: "Round 5: Googliness & Leadership", desc: "Handling pushback from client architects, mentoring, driving technical standards" }
      ],
      strengthsNeeded: { dsa: 4, sql: 8, systemDesign: 10, cloud: 10, businessMetrics: 6, clientFacing: 9 },
      googleCareersQuery: "https://www.google.com/about/careers/applications/jobs/results/?q=%22Professional%20Services%22%20%22Data%22"
    },
    {
      id: "role-swe-data",
      title: "Software Engineer - Data & Infrastructure (SWE L5)",
      organization: "Search / Infrastructure / Cloud / Ads",
      oddsRating: "Tough (5.0/10)",
      barDifficulty: "Very High",
      compensationRange: "$320k - $420k USD / ₹75L - ₹1.1Cr INR",
      cheatCode: "HIGHEST PAY, HARDEST CODING: Standard Google SWE loop with 2–3 algorithmic rounds (LC Medium/Hard, DP, Graphs) + 1 Large-scale Systems Design round. Target this once your DSA pattern recognition is top 5%.",
      interviewRounds: [
        { name: "Round 1: SWE Algorithms & Data Structures", desc: "LeetCode Medium/Hard in Python, clean O(N) optimizations, memory limits" },
        { name: "Round 2: SWE Algorithms & Data Structures", desc: "Dynamic Programming, Trees, Graphs, Complex Recursion" },
        { name: "Round 3: Data Systems Infrastructure Design", desc: "Distributed storage engines, consensus protocols, replication, cache invalidation" },
        { name: "Round 4: System Design & Code Quality", desc: "Concurrency, multithreading, API contracts, modularity" },
        { name: "Round 5: Googliness & Leadership", desc: "Technical roadmapping, engineering excellence, post-mortem culture" }
      ],
      strengthsNeeded: { dsa: 10, sql: 6, systemDesign: 10, cloud: 7, businessMetrics: 3, clientFacing: 2 },
      googleCareersQuery: "https://www.google.com/about/careers/applications/jobs/results/?q=%22Software%20Engineer%22%20data"
    },
    {
      id: "role-tsc",
      title: "Technical Solutions Consultant - Data Platforms (L5)",
      organization: "Google Ads / Operations / Global Business",
      oddsRating: "Very High (8.5/10)",
      barDifficulty: "Moderate",
      compensationRange: "$230k - $320k USD / ₹50L - ₹75L INR",
      cheatCode: "HIGH EFFICIENCY CONVERSION: Tests SQL, Python scripting, and database debugging. Solves technical escalations and builds internal automation tools. Great work-life balance and very direct path into Google.",
      interviewRounds: [
        { name: "Round 1: SQL & Data Analysis", desc: "Complex queries, identifying data inconsistencies, reporting anomalies" },
        { name: "Round 2: Python Automation & Scripting", desc: "API scripting, data transformations, cron pipeline automation" },
        { name: "Round 3: Technical Troubleshooting", desc: "Debugging end-to-end data pipeline failures and system latency" },
        { name: "Round 4: Analytical Case Study", desc: "Translating business requirements into data automation architecture" },
        { name: "Round 5: Googliness & Leadership", desc: "Customer focus, handling urgent escalations, operational excellence" }
      ],
      strengthsNeeded: { dsa: 4, sql: 9, systemDesign: 6, cloud: 6, businessMetrics: 8, clientFacing: 8 },
      googleCareersQuery: "https://www.google.com/about/careers/applications/jobs/results/?q=%22Technical%20Solutions%20Consultant%22"
    }
  ],

  // 75 High-Yield Python DSA Problems with Automated In-Browser Test Suites
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
      testHarness: `
def run_tests():
    test_cases = [
        ([2, 7, 11, 15], 9, [0, 1]),
        ([3, 2, 4], 6, [1, 2]),
        ([3, 3], 6, [0, 1]),
        ([-1, -2, -3, -4, -5], -8, [2, 4])
    ]
    results = []
    for i, (nums, target, expected) in enumerate(test_cases):
        actual = twoSum(nums, target)
        passed = sorted(actual) == sorted(expected)
        results.append(f"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})")
    return "\\n".join(results)
print(run_tests())
`,
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
      testHarness: `
def run_tests():
    test_cases = [
        ([1, 1, 1], 2, 2),
        ([1, 2, 3], 3, 2),
        ([1, -1, 0], 0, 3),
        ([3, 4, 7, 2, -3, 1, 4, 2], 7, 4)
    ]
    results = []
    for i, (nums, k, expected) in enumerate(test_cases):
        actual = subarraySum(nums, k)
        passed = actual == expected
        results.append(f"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})")
    return "\\n".join(results)
print(run_tests())
`,
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
      testHarness: `
def run_tests():
    test_cases = [
        (2, [[1, 0]], [0, 1]),
        (4, [[1,0],[2,0],[3,1],[3,2]], [0, 1, 2, 3]),
        (2, [[1, 0], [0, 1]], []) # Cycle detected
    ]
    results = []
    for i, (n, prereqs, expected) in enumerate(test_cases):
        actual = findOrder(n, prereqs)
        passed = (actual == expected) or (len(actual) == len(expected) and len(expected) > 0)
        results.append(f"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})")
    return "\\n".join(results)
print(run_tests())
`,
      timeComplexity: "O(V + E) vertices and edges",
      spaceComplexity: "O(V + E) for adjacency list + in-degree",
      interviewerTips: "Explicitly relate this to building an execution plan for an ETL/ELT pipeline. Highlight how Kahn's algorithm detects circular dependencies automatically (cycle detection)."
    },
    {
      id: "dsa-4",
      title: "Merge Intervals",
      category: "Intervals",
      difficulty: "Medium",
      deRelevance: "Essential for session merging, resource allocation, and scheduling backfill execution windows.",
      problemStatement: "Given an array of `intervals` where `intervals[i] = [start, end]`, merge all overlapping intervals, and return an array of non-overlapping intervals.",
      pythonStarter: "def merge(intervals: list[list[int]]) -> list[list[int]]:\n    # Implement here\n    pass",
      optimalSolution: "def merge(intervals: list[list[int]]) -> list[list[int]]:\n    intervals.sort(key=lambda x: x[0])\n    merged = []\n    for interval in intervals:\n        if not merged or merged[-1][1] < interval[0]:\n            merged.append(interval)\n        else:\n            merged[-1][1] = max(merged[-1][1], interval[1])\n    return merged",
      testHarness: `
def run_tests():
    test_cases = [
        ([[1,3],[2,6],[8,10],[15,18]], [[1,6],[8,10],[15,18]]),
        ([[1,4],[4,5]], [[1,5]]),
        ([[1,4],[0,4]], [[0,4]]),
        ([[1,4],[2,3]], [[1,4]])
    ]
    results = []
    for i, (intervals, expected) in enumerate(test_cases):
        actual = merge(intervals)
        passed = actual == expected
        results.append(f"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})")
    return "\\n".join(results)
print(run_tests())
`,
      timeComplexity: "O(N log N) sorting step",
      spaceComplexity: "O(N) for output list",
      interviewerTips: "Note how sorting by start time converts a 2D geometric comparison problem into a linear scan. Mention parallel chunk merging if data spans multiple distributed machines."
    },
    {
      id: "dsa-5",
      title: "Top K Frequent Elements in Stream",
      category: "Heaps",
      difficulty: "Medium",
      deRelevance: "Top search queries, trending hashtags, high-frequency fraud identifiers in real-time pipelines.",
      problemStatement: "Given an integer array `nums` and an integer `k`, return the `k` most frequent elements.",
      pythonStarter: "from collections import Counter\nimport heapq\n\ndef topKFrequent(nums: list[int], k: int) -> list[int]:\n    # Implement using Min-Heap of size K or Bucket Sort\n    pass",
      optimalSolution: "from collections import Counter\nimport heapq\n\ndef topKFrequent(nums: list[int], k: int) -> list[int]:\n    count = Counter(nums)\n    heap = []\n    for num, freq in count.items():\n        heapq.heappush(heap, (freq, num))\n        if len(heap) > k:\n            heapq.heappop(heap)\n    return [num for freq, num in heap]",
      testHarness: `
def run_tests():
    test_cases = [
        ([1,1,1,2,2,3], 2, [1, 2]),
        ([1], 1, [1]),
        ([4,1,-1,2,-1,2,3], 2, [-1, 2])
    ]
    results = []
    for i, (nums, k, expected) in enumerate(test_cases):
        actual = topKFrequent(nums, k)
        passed = sorted(actual) == sorted(expected)
        results.append(f"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})")
    return "\\n".join(results)
print(run_tests())
`,
      timeComplexity: "O(N log K)",
      spaceComplexity: "O(N + K)",
      interviewerTips: "Discuss Bucket Sort alternative for O(N) linear time when frequency <= N. Discuss Count-Min Sketch for true infinite distributed streaming at Google scale."
    },
    {
      id: "dsa-6",
      title: "LRU Cache (Buffer Pool & Query Cache)",
      category: "Design & Data Structures",
      difficulty: "Medium",
      deRelevance: "Critical for query result caching, database buffer pool eviction (Postgres/BigQuery), and distributed state storage.",
      problemStatement: "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement LRUCache class with get(key) and put(key, value) in O(1) average time complexity.",
      pythonStarter: "class LRUCache:\n    def __init__(self, capacity: int):\n        # Initialize LRU Cache\n        pass\n\n    def get(self, key: int) -> int:\n        pass\n\n    def put(self, key: int, value: int) -> None:\n        pass",
      optimalSolution: "from collections import OrderedDict\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.capacity = capacity\n        self.cache = OrderedDict()\n\n    def get(self, key: int) -> int:\n        if key not in self.cache:\n            return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]\n\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.capacity:\n            self.cache.popitem(last=False)",
      testHarness: `
def run_tests():
    lru = LRUCache(2)
    lru.put(1, 1)
    lru.put(2, 2)
    r1 = lru.get(1) # returns 1
    lru.put(3, 3) # evicts key 2
    r2 = lru.get(2) # returns -1 (not found)
    lru.put(4, 4) # evicts key 1
    r3 = lru.get(1) # returns -1
    r4 = lru.get(3) # returns 3
    r5 = lru.get(4) # returns 4
    
    passed = (r1 == 1 and r2 == -1 and r3 == -1 and r4 == 3 and r5 == 4)
    return f"Test 1: {'PASSED' if passed else 'FAILED'} (Got {[r1, r2, r3, r4, r5]}, Expected [1, -1, -1, 3, 4])"
print(run_tests())
`,
      timeComplexity: "O(1) for both get and put operations",
      spaceComplexity: "O(Capacity) space complexity",
      interviewerTips: "Interviewers will ask how you implement this without OrderedDict: explain Doubly Linked List + HashMap. Mention thread safety with reader-writer locks or striped locks in multi-threaded ingestion pipelines."
    },
    {
      id: "dsa-7",
      title: "Longest Substring Without Repeating Characters",
      category: "Sliding Window",
      difficulty: "Medium",
      deRelevance: "Core sliding window pattern for session identification, log tokenization, and rolling event deduplication.",
      problemStatement: "Given a string `s`, find the length of the longest substring without repeating characters.",
      pythonStarter: "def lengthOfLongestSubstring(s: str) -> int:\n    # Implement sliding window\n    pass",
      optimalSolution: "def lengthOfLongestSubstring(s: str) -> int:\n    char_map = {}\n    left = 0\n    max_len = 0\n    for right, ch in enumerate(s):\n        if ch in char_map and char_map[ch] >= left:\n            left = char_map[ch] + 1\n        char_map[ch] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len",
      testHarness: `
def run_tests():
    test_cases = [
        ("abcabcbb", 3),
        ("bbbbb", 1),
        ("pwwkew", 3),
        ("", 0),
        ("abba", 2)
    ]
    results = []
    for i, (s, expected) in enumerate(test_cases):
        actual = lengthOfLongestSubstring(s)
        passed = actual == expected
        results.append(f"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})")
    return "\\n".join(results)
print(run_tests())
`,
      timeComplexity: "O(N) single pass sliding window",
      spaceComplexity: "O(min(M, N)) where M is alphabet size",
      interviewerTips: "The common bug is failing on test cases like 'abba' where the duplicate character was seen before the current 'left' pointer. Ensure `char_map[ch] >= left` is checked!"
    },
    {
      id: "dsa-8",
      title: "Find Median from Running Data Stream",
      category: "Heaps",
      difficulty: "Hard",
      deRelevance: "Essential for 50th percentile (P50) / P99 latency tracking, streaming metrics, and dynamic threshold alerting.",
      problemStatement: "The median is the middle value in an ordered integer list. Design a data structure that supports adding integers from a continuous stream and finding the current median in O(1) time.",
      pythonStarter: "import heapq\n\nclass MedianFinder:\n    def __init__(self):\n        # Initialize two heaps: max_heap for lower half, min_heap for upper half\n        pass\n\n    def addNum(self, num: int) -> None:\n        pass\n\n    def findMedian(self) -> float:\n        pass",
      optimalSolution: "import heapq\n\nclass MedianFinder:\n    def __init__(self):\n        self.small = [] # Max-heap (invert values)\n        self.large = [] # Min-heap\n\n    def addNum(self, num: int) -> None:\n        heapq.heappush(self.small, -num)\n        # Balance: largest of small <= smallest of large\n        if self.small and self.large and (-self.small[0] > self.large[0]):\n            val = -heapq.heappop(self.small)\n            heapq.heappush(self.large, val)\n        # Maintain size invariant: small can have at most 1 more element than large\n        if len(self.small) > len(self.large) + 1:\n            val = -heapq.heappop(self.small)\n            heapq.heappush(self.large, val)\n        if len(self.large) > len(self.small):\n            val = heapq.heappop(self.large)\n            heapq.heappush(self.small, -val)\n\n    def findMedian(self) -> float:\n        if len(self.small) > len(self.large):\n            return float(-self.small[0])\n        return (-self.small[0] + self.large[0]) / 2.0",
      testHarness: `
def run_tests():
    mf = MedianFinder()
    mf.addNum(1)
    mf.addNum(2)
    m1 = mf.findMedian() # 1.5
    mf.addNum(3)
    m2 = mf.findMedian() # 2.0
    passed = (abs(m1 - 1.5) < 1e-5 and abs(m2 - 2.0) < 1e-5)
    return f"Test 1: {'PASSED' if passed else 'FAILED'} (Got {[m1, m2]}, Expected [1.5, 2.0])"
print(run_tests())
`,
      timeComplexity: "O(log N) for addNum, O(1) for findMedian",
      spaceComplexity: "O(N) storing stream elements",
      interviewerTips: "At Google scale with billions of telemetry metrics, discuss T-Digest or HdrHistogram algorithms used in Google Monarch and Cloud Monitoring for approximate percentiles (P50/P90/P99) in constant memory."
    }
  ],

  // 🎯 Google L5 Grilling Simulator (25+ Architectural Traps with Junior vs Staff Responses)
  grillingScenarios: [
    {
      id: "grill-1",
      title: "The Massive Viral Video Hotspotting Trap",
      interviewerQuestion: "You designed a streaming pipeline using Cloud Dataflow and Bigtable for live video metrics. Suddenly, Cristiano Ronaldo launches a livestream with 40 Million concurrent viewers. All 40 Million clients write view events with video_id = 'ronaldo_live' every 5 seconds. What happens to your Bigtable cluster, and how do you prevent catastrophic latency spikes?",
      juniorTrapResponse: "I will scale up the Bigtable cluster from 10 nodes to 100 nodes so it can handle the extra traffic.",
      whyJuniorFails: "Fails completely! Bigtable partitions data lexicographically by row key onto tablet servers. If all 40M writes have the same row key or prefix ('ronaldo_live'), 100% of the traffic hits exactly ONE single tablet server. Adding 90 more nodes does nothing because only 1 node receives the write hotspot!",
      seniorL5Response: "At L5, we solve write hotspotting at the ingestion and pre-aggregation layer: 1) Key Salting: In Cloud Dataflow, append a random shard suffix (video_id_0..9) to distribute writes across 10 distinct tablet ranges. 2) In-Memory Worker Combiners: Use Beam's Combine.perKey() locally on streaming worker instances to reduce 40M events/sec down to 100 aggregated updates/sec before touching Bigtable. 3) Two-Stage Aggregation: A secondary global merge step produces the unified counter."
    },
    {
      id: "grill-2",
      title: "The Out-of-Order Mobile Telemetry & Watermark Memory Explosion",
      interviewerQuestion: "Your mobile application sends telemetry over Cloud Pub/Sub. Users in subways lose cellular coverage for 4 hours, and when they reconnect, 4 hours of late-arriving events flood into Dataflow simultaneously. If you use a 10-minute sliding window, what happens to worker memory, and how do you handle it without dropping data?",
      juniorTrapResponse: "I will set the Allowed Lateness in Apache Beam to 24 hours so we never drop any late data.",
      whyJuniorFails: "Setting Allowed Lateness to 24 hours forces the streaming runner to retain window state in memory / local RocksDB for all windows across the entire 24-hour period. Under high throughput, this causes executor Out-Of-Memory (OOM) crashes and cascading pipeline failure.",
      seniorL5Response: "An L5 engineer establishes a strict two-tier architecture: 1) Strict Real-Time Window (Allowed Lateness = 10 mins): Live streaming dashboards and alerts only process events within this bound; late-arriving events past the threshold are tagged and emitted to a side-output (Dead Letter Sink in Cloud Storage). 2) Lambda/Batch Reconciliation: Nightly BigQuery batch jobs re-merge the GCS cold raw logs with the analytical warehouse tables, ensuring 100% audit accuracy without destabilizing the low-latency streaming pipeline."
    },
    {
      id: "grill-3",
      title: "BigQuery MERGE DML Quota Exhaustion in Near-Real-Time Pipelines",
      interviewerQuestion: "A candidate proposes executing a BigQuery MERGE statement every 10 seconds to upsert Change Data Capture (CDC) records from transactional Postgres into a target reporting table. Why will this fail in production at Google scale, and what is the native BigQuery pattern?",
      juniorTrapResponse: "BigQuery supports standard SQL MERGE, so running it every 10 seconds will keep the table fresh.",
      whyJuniorFails: "BigQuery enforces strict DML concurrent and daily quotas per table. Continuous MERGE operations on a table will trigger 'Rate limit exceeded: too many table update operations', incur massive slot contention, and corrupt read queries.",
      seniorL5Response: "Never run continuous MERGE in high-frequency CDC. The industry standard Google Cloud pattern is: 1) Append-Only Ingestion via BigQuery Storage Write API (Default stream with at-least-once, or committed stream with deduplication IDs) into a raw append changelog table. 2) Real-Time Deduplication View: Expose the table through a lightweight BigQuery view utilizing QUALIFY ROW_NUMBER() OVER (PARTITION BY primary_key ORDER BY commit_lsn DESC) = 1. 3) Periodic Compaction: Run a scheduled batch compaction once per night during off-peak hours to garbage-collect older row versions."
    },
    {
      id: "grill-4",
      title: "Cloud Spanner Monotonically Increasing Key Hotspotting",
      interviewerQuestion: "You are designing a globally distributed transaction ledger on Cloud Spanner. You choose the primary key as (commit_timestamp, account_id). Why will this cause severe performance degradation at high write throughput, and how do you resolve it?",
      juniorTrapResponse: "Spanner is globally distributed and scales horizontally automatically, so it will handle timestamps fine.",
      whyJuniorFails: "Spanner splits data ranges lexicographically. A monotonically increasing primary key (e.g. timestamp or auto-incrementing ID) directs 100% of all new writes to the single split at the very end of the key range, causing severe write hotspotting and saturating one node while the rest of the cluster sits idle.",
      seniorL5Response: "At L5, we prevent range-split hotspotting using Key Distribution: 1) Key Inversion / Prepending: Prepend a hash shard prefix, e.g. FARM_FINGERPRINT(account_id) % 10 or reverse the bits of the timestamp. 2) High-Cardinality Natural Key: Swap the composite key order to (account_id, commit_timestamp) so writes distribute evenly across accounts. 3) Sharded Sequences: If sequential order is strictly necessary, use Spanner's bit-reversed positive sequence generator to distribute writes uniformly across the key space."
    },
    {
      id: "grill-5",
      title: "BigQuery Slot Contention & Memory Shuffle Disk Spillage",
      interviewerQuestion: "Your nightly 50TB aggregation query fails with 'Resources exceeded during query execution: Not enough memory for shuffle'. A teammate suggests purchasing 2,000 more dedicated slots. Why is that an anti-pattern and how do you diagnose and fix the root cause?",
      juniorTrapResponse: "We should increase slot reservation and allocate more compute budget to the project.",
      whyJuniorFails: "Slot exhaustion during shuffles almost always indicates catastrophic Data Skew (a single reducer receives 95% of the data due to a massive skew in the join key, such as NULL values or a single bot user_id) or an accidental Cartesian cross-join. Buying more slots simply burns thousands of dollars while the query continues to fail on the skewed worker!",
      seniorL5Response: "An L5 engineer inspects the Execution Plan graph: 1) Identify Skew: Check slot-time vs elapsed time across stages. If one stage has max slot time 100x average slot time, data skew is present. 2) Filter/Isolate Skew: Filter out NULL keys before joining (e.g. WHERE join_key IS NOT NULL) or split the query into two branches (high-cardinality join + separate handling of skewed key). 3) Salting Join Keys: Pre-aggregate with a salted key (MOD(FARM_FINGERPRINT(id), 10)) before performing the global aggregation. 4) Partition & Cluster: Ensure source tables partition on date and cluster by the join key to minimize data scanned and enable block-level skipping."
    },
    {
      id: "grill-6",
      title: "True Exactly-Once Guarantees across Pub/Sub and Downstream Sinks",
      interviewerQuestion: "A payment gateway streams transactions into Cloud Pub/Sub. Pub/Sub guarantees at-least-once delivery. A candidate claims Apache Beam / Dataflow guarantees exactly-once processing, so downstream billing records will never be duplicated. Is this true?",
      juniorTrapResponse: "Yes, Apache Beam's exactly-once guarantee ensures that downstream databases will never receive duplicate transactions.",
      whyJuniorFails: "Crucial failure to understand distributed systems boundaries! Dataflow's exactly-once guarantee is strictly INTERNAL to the Beam pipeline graph between pipeline stages (using state checkpoints and bloom filters). External systems (sources and sinks) require explicit idempotency protocols; otherwise network retries on sink writes create duplicate transactions!",
      seniorL5Response: "An L5 engineer establishes true end-to-end idempotency: 1) Ingestion Deduplication: In Pub/Sub, assign a deterministic ordering_key or message attribute deduplication_id. Dataflow tracks these in a sliding deduplication window using State & Timers. 2) Idempotent Sinks: Write to BigQuery using the Storage Write API with explicit write_stream_offset and committed streams. For Cloud Spanner or Cloud SQL, use upsert semantics (INSERT ... ON CONFLICT DO NOTHING / INSERT OR IGNORE) keyed on the unique transaction_id. 3) Reconciliation Auditing: Implement a separate reconciliation batch job comparing source gateway totals against analytical warehouse ledgers."
    }
  ],

  // 💼 Google Recruiter & Referral Outreach Engine
  outreachTemplates: [
    {
      id: "out-1",
      target: "Google Technical Recruiter (LinkedIn InMail)",
      subject: "Senior Data Engineer / Cloud Analytics Architect (5+ Yrs) - Exploring L5 Opportunities",
      body: `Hi [Recruiter Name],

I noticed you lead engineering hiring for Google [Cloud / Core Data / Ads]. 

I am a Senior Data Engineer with 5+ years of experience specializing in petabyte-scale distributed data architectures, BigQuery/GCP, and high-throughput real-time streaming (Apache Beam/Spark). In my current role, I recently [insert your highest XYZ metric, e.g., reduced data pipeline latency from 45m to 2.1s while cutting cloud storage costs by 35%].

Given my background in distributed systems and analytical modeling, I'm very interested in L5 Data Engineer / Analytics Architect roles across your teams. 

Would you have 10 minutes this week or next for a brief introductory conversation? I've attached my resume for your review.

Best regards,
[Your Name]
[LinkedIn Profile / GitHub / Portfolio]`
    },
    {
      id: "out-2",
      target: "Google Engineering Manager / Tech Lead (Cold Referral Request)",
      subject: "Fellow Data Engineer - Admiring your team's work on [Specific Google Product, e.g. BigQuery / YouTube Analytics]",
      body: `Hi [Name],

I've been following your engineering contributions on [Google Cloud / Data Infrastructure] and really enjoyed your team's recent work on [mention a specific blog post or tech release, e.g. BigQuery BigLake / Dataflow streaming auto-scaling].

I am a Senior Data Engineer with 5+ years of experience architecting distributed pipelines (Spark, Apache Beam, Kafka, cloud data warehouses). I've been deep-diving into Google's distributed systems literature (Dremel, TrueTime, Dataflow model) and am actively preparing for L5 Data Engineering roles.

I know how valuable high-signal referrals are at Google. If you're open to reviewing my background, I would be grateful for a quick 10-minute chat or advice on positioning my profile for your organization.

Thanks for your time and leadership in the data space!

Best regards,
[Your Name]`
    },
    {
      id: "out-3",
      target: "Google Alumni / 2nd Degree Connection (Warm Referral)",
      subject: "Quick question regarding Data Engineering & Analytics culture at Google",
      body: `Hi [Name],

I noticed that you're working at Google as a [Role/Title] in [Location/Team]!

I'm a Senior Data Engineer (5+ yrs experience with distributed systems, BigQuery, Spark, and real-time streaming). I'm currently preparing to apply for Senior Data Engineer / BIE roles at Google.

I would love to learn more about the day-to-day engineering culture and what qualities your team values most at the L5 level. If your schedule allows for a brief 10-minute virtual coffee or quick advice over chat, I would genuinely appreciate your perspective.

Thanks so much,
[Your Name]`
    },
    {
      id: "out-4",
      target: "Post-Interview Follow-Up (Demonstrating L5 Technical Rigor)",
      subject: "Thank You - Google L5 Interview Follow-Up [Your Name]",
      body: `Hi [Recruiter Name],

Thank you for coordinating my interview rounds today! I really enjoyed speaking with [Interviewer Names] about distributed stream processing, data modeling, and architectural trade-offs.

During my system design discussion regarding [e.g. real-time telemetry processing], I enjoyed diving into watermark windowing and key salting. Upon further reflection after the call, I also considered that for [specific edge case discussed], implementing a dead-letter replay pipeline with Cloud Storage and BigQuery Storage Write API would further optimize slot efficiency during unpredictable traffic spikes.

Please convey my appreciation to the interview panel. I look forward to hearing about the next steps!

Best regards,
[Your Name]`
    }
  ],

  // 10 Classic Google DE System Design Blueprints with Interactive Visual Flow Nodes
  systemDesigns: [
    {
      id: "sys-1",
      title: "Real-Time YouTube Video View Counter & Trending Engine",
      scale: "2 Billion active users, 500 hours video uploaded/min, 100M views/sec peak",
      latencySLA: "< 1 second for user-facing count, < 30 seconds for global trending feed",
      flowNodes: [
        { tier: "Ingestion", tech: "Cloud Pub/Sub", note: "Ordering key = video_id, partitioned topics" },
        { tier: "Stream Compute", tech: "Cloud Dataflow (Beam)", note: "Sliding 10-min windows for velocity + 1-min fixed count" },
        { tier: "Hot Storage", tech: "Cloud Bigtable", note: "Row key: video_id#reversed_timestamp (sub-5ms writes)" },
        { tier: "Cold OLAP", tech: "BigQuery", note: "Partitioned by day, audits for advertiser billing" },
        { tier: "Serving Cache", tech: "Distributed Memcached", note: "High-hit cache layer for viral videos" }
      ],
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
      flowNodes: [
        { tier: "Source DB", tech: "Postgres WAL", note: "Logical replication decoding" },
        { tier: "CDC Engine", tech: "Debezium / Datastream", note: "Converts WAL commits to structured JSON events" },
        { tier: "Transport", tech: "Cloud Pub/Sub", note: "Ordering key = table_primary_key" },
        { tier: "Streaming Sink", tech: "Dataflow + BQ Storage Write API", note: "Exactly-once stream append with deduplication token" },
        { tier: "Target DW", tech: "BigQuery Dynamic Views", note: "QUALIFY ROW_NUMBER() over LSN DESC for zero-lock reads" }
      ],
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
      flowNodes: [
        { tier: "Edge Gate", tech: "Cloud Load Balancer", note: "IP rate limiting and Geo-blocking" },
        { tier: "Ingestion", tech: "Cloud Pub/Sub", note: "Partitioned by publisher_id" },
        { tier: "Stateful CEP", tech: "Apache Flink / Beam", note: "Sliding 5-min frequency per IP/device" },
        { tier: "ML Scoring", tech: "Vertex AI / TF Serving", note: "gRPC side-input feature scoring" },
        { tier: "Verdict DB", tech: "Cloud Bigtable", note: "Real-time blacklisted token lookup" }
      ],
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

  // Google Resume XYZ Bullet Templates
  resumeTemplates: [
    {
      id: "res-1",
      category: "Pipeline Scaling & Cost Optimization",
      role: "Data Engineer / Cloud Architect",
      googleFormula: "Accomplished [X] as measured by [Y], by doing [Z]",
      exampleBullet: "Reduced daily BigQuery computing costs by $240,000/yr (35% reduction) and cut peak query latency from 45s to 2.1s by redesigning table partitioning on ingestion date, clustering by customer_id, and migrating 120 unnested subqueries to materialized aggregate tables.",
      placeholders: {
        x: "Reduced cloud data processing expenditure and accelerated analytics query performance",
        y: "$240,000 annual cost reduction (35%) and 95% latency reduction (45s to 2.1s)",
        z: "re-architecting BigQuery table partitioning, clustering, and implementing incremental materialized views"
      }
    },
    {
      id: "res-2",
      category: "Real-Time Streaming & Fraud Detection",
      role: "Data Engineer / SWE Data",
      googleFormula: "Accomplished [X] as measured by [Y], by doing [Z]",
      exampleBullet: "Architected a real-time event streaming pipeline processing 150,000 events/sec with sub-second SLA (<600ms latency) by deploying Apache Beam (Dataflow) with sliding 10-minute session windows and Cloud Bigtable low-latency point lookups, preventing $1.2M in fraudulent transactions.",
      placeholders: {
        x: "Built low-latency fraud detection ingestion architecture",
        y: "Processed 150k events/sec with <600ms SLA, preventing $1.2M in annual fraud losses",
        z: "deploying Apache Beam on Google Cloud Dataflow with stateful session windowing and Cloud Bigtable"
      }
    },
    {
      id: "res-3",
      category: "Data Modernization & Zero-Downtime Migration",
      role: "Cloud Consultant / Customer Solutions",
      googleFormula: "Accomplished [X] as measured by [Y], by doing [Z]",
      exampleBullet: "Led zero-downtime migration of a 180TB legacy on-premises Hadoop/Hive data warehouse to Google Cloud BigQuery for 450 downstream users by establishing a Debezium/PubSub CDC dual-write synchronization architecture and automated SHA-256 data reconciliation pipelines.",
      placeholders: {
        x: "Delivered enterprise data warehouse modernization with zero business disruption",
        y: "Migrated 180TB data and 4,000 pipelines with 99.99% data parity across 450 global stakeholders",
        z: "engineering a dual-ingestion CDC pipeline with automated checksum reconciliation and staged traffic cutover"
      }
    },
    {
      id: "res-4",
      category: "Dimensional Modeling & Analytics Engineering",
      role: "Business Intelligence Engineer",
      googleFormula: "Accomplished [X] as measured by [Y], by doing [Z]",
      exampleBullet: "Transformed company-wide executive revenue reporting across 14 product lines by architecting a Kimball SCD Type 2 dimensional model and dbt semantic layer, eliminating 18 hours of manual weekly reconciliation and standardizing Gross Margin definitions across 3 VP organizations.",
      placeholders: {
        x: "Standardized enterprise analytics data models and automated revenue reporting",
        y: "Saved 900+ engineering hours/year and eliminated metric discrepancies across 3 VP organizations",
        z: "implementing Kimball star schemas with Slowly Changing Dimensions (Type 2) and an automated CI/CD dbt test suite"
      }
    }
  ],

  // Mock Interview Simulations
  mockSimulations: [
    {
      id: "mock-1",
      title: "Google L5 DE: Real-Time Clickstream Aggregation (System Design)",
      roundType: "Distributed System Design",
      durationMinutes: 45,
      prompt: "Design an end-to-end ingestion and analytics platform for YouTube live-stream comments and reactions (50M concurrent viewers, 500,000 messages/sec peak). Needs real-time moderation within 500ms and batch daily engagement dashboards.",
      milestones: [
        { minute: 5, goal: "Requirements Clarification: QPS, peak throughput, message retention, P99 latency SLA (<500ms), and availability target." },
        { minute: 15, goal: "High-Level Architecture: Pub/Sub ingestion -> Dataflow (Beam) streaming -> Bigtable (hot metrics) + BigQuery (cold warehouse) + Serving API." },
        { minute: 30, goal: "Deep Dive on Bottlenecks: Handling high write volume to single celebrity livestreams (key salting), watermark progression with late comments, and deduplication." },
        { minute: 40, goal: "Governance & Operations: Dead-letter queues for unparseable JSON, pipeline autoscaling, and backfill strategy for model re-training." },
        { minute: 45, goal: "Summary & Trade-off Recap: Defend Bigtable vs Spanner vs Redis cache." }
      ]
    },
    {
      id: "mock-2",
      title: "Google L5 Coding: Task Dependency Scheduler with Cycle Detection",
      roundType: "Python Data Algorithms",
      durationMinutes: 45,
      prompt: "Given a list of data pipeline tasks and their prerequisite dependencies, write a Python class `PipelineScheduler` that returns an optimal parallel execution order (batches of tasks that can run concurrently) and detects circular deadlocks.",
      milestones: [
        { minute: 5, goal: "Understand inputs/outputs, ask about disconnected subgraphs, empty graph, and scale (thousands of tasks)." },
        { minute: 15, goal: "Propose Topological Sort using Kahn's algorithm (in-degree array + queue) with level-by-level BFS batching." },
        { minute: 30, goal: "Implement clean, production-grade Python code with error handling for cycles (raise CircularDependencyError)." },
        { minute: 40, goal: "Dry run with edge cases: 1) cycle exists, 2) disconnected pipelines, 3) linear chain. State Time O(V+E) and Space O(V+E)." },
        { minute: 45, goal: "Discuss how this maps to Apache Airflow DAG parsing engine." }
      ]
    },
    {
      id: "mock-3",
      title: "Google L5 SQL & Modeling: Session Inactivity & Multi-Touch Attribution",
      roundType: "SQL & Data Modeling",
      durationMinutes: 45,
      prompt: "Given an advertising clickstream table with impressions and purchase events, write a BigQuery SQL query to implement 30-minute inactivity sessionization and calculate First-Touch and Last-Touch attribution revenue for each ad campaign.",
      milestones: [
        { minute: 5, goal: "Clarify definition of session timeout (30 mins of inactivity) and attribution windows." },
        { minute: 15, goal: "Design the Kimball star schema: fact_ad_clicks, fact_purchases, dim_campaign." },
        { minute: 30, goal: "Write standard SQL query using TIMESTAMP_DIFF, LAG(), and cumulative SUM() window functions." },
        { minute: 40, goal: "Optimize query for BigQuery: partition pruning on event_date and clustering on (campaign_id, user_id)." },
        { minute: 45, goal: "Explain why QUALIFY and UNNEST reduce intermediate shuffle." }
      ]
    }
  ],

  // Flashcards for Office Micro-Drills
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
  ],

  // 90-Day Schedule (Foundations to Mastery)
  schedule: [
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
    { day: 21, phase: 1, week: 3, title: "Phase 1 Checkpoint: Mock Assessment 1", pillar: "review", focus: "Full Coding + SQL Mock simulation", sql: "Comprehensive SQL challenge", design: "Review Kimball Modeling & Storage trade-offs", estMinutes: 240 }
  ],

  // Advanced SQL Challenges
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

  // Real Recent Google Questions
  recentGoogleQuestions: [
    {
      id: "gq-1",
      role: "Senior Data Engineer (L5)",
      source: "Google MTV / Sunnyvale Loop (2025/2026)",
      round: "Coding / Data Algorithms",
      question: "You have a stream of user log events: `(timestamp, user_id, action)`. Implement a class that tracks the Top 10 most active users in the last 15 minutes. How do you handle out-of-order logs that arrive up to 2 minutes late?",
      hints: "Combine a sliding window deque for expired events + a hash map for user counts + a min-heap or balanced BST for the top 10. For distributed scale, discuss Count-Min sketch with decay or Apache Beam sliding windows."
    },
    {
      id: "gq-2",
      role: "Senior Data Engineer (L5)",
      source: "Google Cloud Data Team Loop",
      round: "Distributed System Design",
      question: "Design an end-to-end data pipeline to ingest, validate, and compute daily billing aggregates for 500 million Google Cloud VMs. Every VM sends heartbeat metrics every 10 seconds. Financial reconciliation requires 100% accuracy and zero double-counting.",
      hints: "Focus on idempotent pipeline sinks, deduplication tokens in Pub/Sub, two-stage Dataflow aggregation, and writing to BigQuery using transactional partition loading."
    },
    {
      id: "gq-3",
      role: "Business Intelligence Engineer (L5)",
      source: "Google Devices & Services (Pixel/Nest)",
      round: "SQL & Analytics Modeling",
      question: "Given a table of Pixel phone activation events `activations(device_id, user_id, activation_date, country)` and return events `returns(device_id, return_date, reason)`. Write a query to calculate the 30-day, 60-day, and 90-day rolling return rate by device model and country. Handle cases where activation occurs in one month and return occurs 2 months later.",
      hints: "Use LEFT JOIN with date range condition `return_date BETWEEN activation_date AND DATE_ADD(activation_date, INTERVAL 30 DAY)` or window functions with conditional SUM()."
    },
    {
      id: "gq-4",
      role: "Customer Solutions Engineer (L5)",
      source: "Google Cloud Enterprise Consulting",
      round: "Scenario & Architecture",
      question: "A multi-billion dollar retail customer wants to migrate their legacy 200TB Teradata data warehouse to BigQuery. They have 4,000 daily SQL stored procedures and cannot tolerate any downtime during peak Black Friday sales. How do you design the migration phases, data validation framework, and cutover strategy?",
      hints: "Use a 4-phase framework: 1) Dual-ingestion CDC pipeline, 2) SQL translation & historical backfill, 3) Shadow-run automated reconciliation engine (comparing query result hashes), 4) Gradual traffic routing with instant rollback."
    },
    {
      id: "gq-5",
      role: "Senior Data Engineer (L5)",
      source: "YouTube Core Data Loop",
      round: "Data Modeling & SQL",
      question: "Design the dimensional model for YouTube Shorts video interactions (views, likes, shares, swipe-aways). How would you structure fact and dimension tables to support sub-second query latency for creators while maintaining cost efficiency on petabyte-scale data?",
      hints: "Use an Accumulating Snapshot fact table for short-lifecycle metrics + Transaction fact table partitioned by day and clustered on (channel_id, video_id). Explain BigQuery nested repeated fields for user interaction tags."
    }
  ],

  // Office Deep-Dive Reading Vault
  readingVault: [
    {
      id: "read-1",
      title: "Google Dremel: Interactive Analysis of Web-Scale Datasets (The BigQuery Engine)",
      category: "Storage & Query Execution",
      readTime: "15 min read",
      summary: "How Google built the technology that powers BigQuery, executing SQL aggregations over trillions of records in seconds across thousands of commodity machines.",
      keyTakeaways: [
        "Columnar Storage of Nested Records: Dremel decomposes complex Protobuf structures into separate columns using Definition Levels and Repetition Levels, avoiding decompression of irrelevant fields.",
        "Multi-Level Execution Trees: Instead of MapReduce, Dremel uses a hierarchical serving tree. Root server receives the SQL, rewrites it, passes it to Intermediate servers, which push down query fragments to thousands of Leaf servers directly reading from Colossus (Google's distributed filesystem).",
        "Dynamic Aggregation: Aggregations are computed in parallel at the leaf level, merged up the tree, reducing network bandwidth by 99%."
      ],
      l5InterviewContext: "When asked how BigQuery scales in System Design, cite Dremel's tree architecture, slot dynamic allocation, and the separation of compute (Dremel) from storage (Colossus)."
    },
    {
      id: "read-2",
      title: "The Dataflow Model: Unified Stream and Batch Processing (Tyler Akidau)",
      category: "Stream Processing",
      readTime: "20 min read",
      summary: "The definitive paper written by the Google Cloud Dataflow team that created Apache Beam and redefined how the industry thinks about stream processing.",
      keyTakeaways: [
        "Decoupling Event Time from Processing Time: Never rely on when an event reaches the server (Processing Time); always track when the event happened in the real world (Event Time).",
        "Watermarks as Time Progress: A watermark is a monotonically increasing timestamp reflecting the pipeline's belief that no older data will arrive. If data arrives behind the watermark, it is 'late-arriving data'.",
        "The 4 Crucial Questions: 1) What is computed (PTransforms)? 2) Where in event time (Windowing)? 3) When in processing time (Triggers/Watermarks)? 4) How do results relate (Accumulating vs Discarding)?"
      ],
      l5InterviewContext: "Essential for any real-time streaming question. If you mention 'sliding windows with allowed lateness and speculative triggers' in an L5 round, interviewers know you understand production-grade streaming."
    },
    {
      id: "read-3",
      title: "Google Cloud Spanner: TrueTime and Globally-Distributed ACID Transactions",
      category: "Databases & Consistency",
      readTime: "18 min read",
      summary: "How Google overcame the CAP theorem using GPS receivers and atomic clocks in data centers to provide globally-consistent ACID transactions with linearizability.",
      keyTakeaways: [
        "TrueTime API: Instead of returning a single timestamp, TrueTime returns a time interval [earliest, latest] with guaranteed uncertainty bound (typically < 7ms).",
        "Commit Wait Protocol: Spanner guarantees that if transaction T2 starts after transaction T1 commits, T2's timestamp is strictly greater than T1's by waiting out the TrueTime uncertainty bound.",
        "Paxos State Machine: High availability and data replication across continents without split-brain risk."
      ],
      l5InterviewContext: "Use this to explain when to choose Cloud Spanner (multi-region financial ledgers, strict consistency) vs Cloud Bigtable (millisecond write throughput, single-row transactions only)."
    },
    {
      id: "read-4",
      title: "Bigtable: A Distributed Storage System for Structured Data",
      category: "NoSQL & Storage Engines",
      readTime: "15 min read",
      summary: "The foundation of modern NoSQL databases (HBase, Cassandra). A sparse, distributed, persistent multi-dimensional sorted map.",
      keyTakeaways: [
        "Map Structure: Keyed by (row:string, column:string, time:int64) -> uninterpreted byte array.",
        "LSM-Tree Storage: Writes enter an in-memory MemTable and write-ahead log (WAL). When MemTable fills, it flushes to an immutable SSTable on Colossus. Periodic compactions merge SSTables and purge tombstones.",
        "Row Key Design: Data is lexicographically sorted by row key. Bad row keys (e.g. timestamp prefixes) cause write hotspotting; good row keys (e.g. reverse domain or hash prefix) distribute load evenly across tablet servers."
      ],
      l5InterviewContext: "Critical for high-throughput streaming systems (IoT, telemetry, view counters). Always demonstrate row-key salting to prevent tablet hotspotting."
    }
  ],

  // 🐣 Beginner-to-Google ELI5 Primer (First Principles Masterclass)
  beginnerPrimer: [
    {
      id: "eli5-1",
      topic: "The Imposter Cure: How Google Actually Evaluates Candidates",
      category: "Mindset & Strategy",
      badge: "Start Here",
      analogy: "Google is NOT looking for a human textbook who memorized Wikipedia. They want an engineer who stays calm, breaks big messy problems down into clean small steps, and communicates clearly.",
      coreConcept: "Why feeling like a beginner is your biggest secret advantage:",
      breakdown: [
        "1. The 80/20 Rule: 80% of data interviews at Google revolve around 5 Python primitives (dict, list, set, deque, heap) and 4 SQL clauses (GROUP BY, Window Functions, CASE WHEN, CTEs). You do NOT need to master 200 obscure competitive programming algorithms.",
        "2. The 'Clarify First' Habit: Candidates who jump into coding instantly fail 70% of the time. Candidates who spend the first 5 minutes asking 3 clarifying questions ('What is the volume of data?', 'Can IDs be duplicate or negative?', 'Is latency or cost our main priority?') pass at 3x the rate because asking questions is the #1 marker of a Senior engineer.",
        "3. Thinking Aloud: Google interviewers will actively guide and give you hints if you get stuck, PROVIDED you are talking out loud. If you say 'I'm thinking of using a hash map here to trade space for O(1) lookup time, but I'm checking if memory allows it', the interviewer will say 'Great point, memory is plenty, go ahead with the hash map!'"
      ],
      actionableTakeaway: "Never pretend to know everything. Be the structured, calm engineer who clarifies assumptions, outlines a plain-English plan first, and writes clean, readable code."
    },
    {
      id: "eli5-2",
      topic: "The Pizza Restaurant Guide to Distributed Data Systems",
      category: "System Design ELI5",
      badge: "Core Architecture",
      analogy: "Imagine running a bustling pizzeria in New York City serving 10,000 customers every hour.",
      coreConcept: "Every complex Google Cloud technology mapped to simple kitchen operations:",
      breakdown: [
        "1. Cloud Pub/Sub (The Order Ticket Rack): When 5,000 customers scream orders at the cashier at once, the cashier does NOT scream at the cooks. They write order tickets and clip them to an overhead spinning ticket wheel. The cooks grab tickets at their own pace. If the kitchen slows down, tickets safely pile up on the rack without orders being lost. That is 'Decoupled Message Buffering'.",
        "2. Cloud Dataflow / Apache Beam (The Assembly Line Cooks): Instead of 1 cook making an entire pizza from scratch for 15 minutes, 10 cooks stand along a conveyor belt: Cook 1 spreads dough, Cook 2 adds sauce, Cook 3 adds cheese, Cook 4 bakes it. This is 'Stream & Batch Parallel Processing'.",
        "3. Cloud Bigtable (The Kitchen Expediter Whiteboard): The manager has a fast dry-erase whiteboard showing: 'Order #42 status: BAKING'. Lookups take 1 millisecond. You can't ask complex questions like 'How much cheese did we use across all pizzas last month?', but you can ask 'Is order #42 ready?' at lightning speed. This is 'Sub-10ms NoSQL Point-Lookups'.",
        "4. Google BigQuery (The Corporate Accounting Archives): In the back office, the owner keeps a filing cabinet of every receipt from the last 10 years. Once a month, the accountant asks: 'Show me total revenue by zip code on rainy Tuesdays'. It reads millions of receipts in seconds. But you would NEVER use the accountant's ledger to check if a customer's slice is ready right now! That is 'OLAP Data Warehousing vs OLTP'.",
        "5. Write Hotspotting (The Pepperoni Bottleneck): If an influencer tweets that the Pepperoni Slice is amazing, and 90% of customers order pepperoni, Cook #3 who handles pepperoni gets overwhelmed and collapses while the other 9 cooks sit idle. The fix? 'Key Salting': assign 5 cooks to pepperoni by adding a random tag (Pepperoni-1, Pepperoni-2, Pepperoni-3) to spread the load."
      ],
      actionableTakeaway: "In System Design, never memorize tool names blindly. Just ask: 'Do I need an order rack (Pub/Sub), assembly cooks (Dataflow), a quick whiteboard (Bigtable), or the accountant's archive (BigQuery)?'"
    },
    {
      id: "eli5-3",
      topic: "Python for Beginners: The Only 5 Patterns You Need to Pass",
      category: "Python Coding",
      badge: "High Yield",
      analogy: "You don't need to learn all of Python. You only need 5 basic tools in your toolbelt.",
      coreConcept: "The 5 Swiss Army Knives of Google Coding:",
      breakdown: [
        "1. The Bouncer (Hash Map / Dict): `seen = {}`. Why: Looking through a list of 1 million items takes 1 million steps (O(N)). Looking in a dictionary takes 1 step (O(1)). Whenever a problem asks 'Have we seen this before?' or 'Find the pair', use a dictionary.",
        "2. The Organizer (`collections.defaultdict(list)`): Automatically creates a list if a key doesn't exist yet. Eliminates messy `if key not in d: d[key] = []` boilerplate.",
        "3. The Two-Finger Squeeze (Two Pointers): Put one finger at index 0 and one finger at the end. Move them towards each other. Used for sorting, reversing, palindrome checks, and finding sums in sorted arrays.",
        "4. The Moving Window (Sliding Window): Like looking at a scenic train view through a window frame. As the train moves forward, one tree leaves the frame on the left, and one enters on the right. Never re-calculate the whole view; just subtract what left and add what entered!",
        "5. The VIP Line (Min-Heap / `heapq`): Keeps the top K elements organized with zero wasted memory. When finding 'Top 10 trending videos out of 100 million', a heap of size 10 uses tiny memory."
      ],
      actionableTakeaway: "Whenever you read a LeetCode problem, don't panic. Ask yourself: 'Is this a Bouncer problem, an Organizer problem, a Two-Finger squeeze, or a Moving Window?'"
    },
    {
      id: "eli5-4",
      topic: "SQL from Ground Zero to Google-Ready in 4 Rules",
      category: "SQL & Warehousing",
      badge: "Backdoor Mastery",
      analogy: "SQL is not math; it is telling a database how to sort and group a spreadsheet.",
      coreConcept: "The 4 SQL pillars that unlock BIE & Data Engineer roles:",
      breakdown: [
        "1. The Kitchen Blender (`GROUP BY`): Collapsing 1,000 transaction rows into 1 row per customer using `SUM()`, `AVG()`, or `COUNT()`. Rule: Every column in your SELECT that isn't inside a SUM/COUNT must be in your GROUP BY!",
        "2. Department Lottery Tickets (`ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC)`): Think of giving rank tickets #1, #2, #3 to employees inside their own department. Filter with `WHERE rank = 1` to get the highest earner in each department.",
        "3. The Running Odometer (`SUM(amount) OVER (ORDER BY date)`): Calculates rolling cumulative balances across time without collapsing rows.",
        "4. The Safety Net (`COALESCE(revenue, 0)`): Replaces dreaded NULL values with 0 so your math never crashes in production."
      ],
      actionableTakeaway: "BIE and Analytics Engineer roles at Google test these 4 rules in 90% of questions. If you master these 4, you can pass the technical SQL round with flying colors."
    },
    {
      id: "eli5-5",
      topic: "Why BIE & Customer Solutions Engineer are the Smartest Move for Beginners",
      category: "Google Career Strategy",
      badge: "Secret Cheat Code",
      analogy: "If the front door has 10 guards checking dynamic programming algorithms, but the side door is wide open with friendly people asking about SQL and customer architecture, use the side door!",
      coreConcept: "The Trojan Horse Strategy Explained:",
      breakdown: [
        "1. Identical Google Badge & Perks: You are a full-time Googler (FTE) on Day 1. Same stock options (GSUs), same 401k/EPF match, same food, same compensation band ($240k–$360k+ USD / ₹55L–₹85L+ INR).",
        "2. 80% Lower LeetCode Bar: You will NOT be asked hard LeetCode graphs or dynamic programming. You will be asked clean SQL queries, practical Python data manipulation, and common sense business metric debugging.",
        "3. Massive Hiring Volume: Google Cloud is expanding rapidly. Enterprise clients need Customer Solutions Engineers (CSEs) and BIEs to help them adopt BigQuery and Looker.",
        "4. The 12-Month Internal Mobility Rule: Google policy allows full-time employees in good standing to transfer to ANY team or role (including Software Engineer or Core Data Engineer) after 12 months with internal team matching, bypassing the brutal external interview grinder!"
      ],
      actionableTakeaway: "Set your primary target as BIE / Analytics Engineer or CSE. Treat pure DE as a stretch goal. Getting the Google offer is what matters — you can pivot anytime once you're inside!"
    }
  ],

  // 🔄 Azure & Snowflake ➔ Google Cloud (GCP) Rosetta Stone
  azureToGcpRosetta: [
    {
      azureSnowflakeTech: "Snowflake Data Warehouse",
      gcpTech: "Google BigQuery",
      analogy: "Both are high-speed analytical engines that store data by column instead of row.",
      keyDifferences: [
        "Compute Architecture: Snowflake provisions Virtual Warehouses (XS, S, M, L... 4XL). BigQuery is completely serverless using dynamic 'Slots' (workers).",
        "Storage vs Compute: Both decouple compute from storage. Snowflake stores data in micro-partitions. BigQuery stores data in Capacitor format on Colossus (Google's internal distributed file system).",
        "Pricing Model: Snowflake charges credit consumption per second of running warehouse. BigQuery offers on-demand per TB scanned ($6.25/TB) and flat-rate slot reservations."
      ],
      googleInterviewTrap: "If asked how to optimize BigQuery like Snowflake, DO NOT say 'scale up the warehouse'. Say: 'In BigQuery, we partition by date/timestamp and cluster by high-cardinality search keys (e.g. customer_id, order_id) to eliminate scanning unnecessary bytes and reduce slot-time.'"
    },
    {
      azureSnowflakeTech: "Azure Databricks (PySpark)",
      gcpTech: "Cloud Dataproc & Cloud Dataflow",
      analogy: "Databricks runs Apache Spark on Azure VMs. Dataproc runs native Spark on GCP. Dataflow runs Apache Beam.",
      keyDifferences: [
        "Dataproc: Fast-starting (90 second) managed Spark/Hadoop clusters on GCP. All your existing PySpark code runs on Dataproc with zero code changes!",
        "Dataflow: Google's proprietary serverless runner for Apache Beam. Handles both streaming and batch with autoscaling workers and unified event-time windowing.",
        "When to use which: Use Dataproc for migrating existing Spark jobs with minimal rewrite. Use Dataflow for greenfield streaming pipelines and tighter GCP integrations."
      ],
      googleInterviewTrap: "Interviewers will ask: 'Why choose Dataflow over Spark on Dataproc?' Answer: 'Dataflow provides fully serverless auto-scaling (scaling up and down dynamically without cluster resizing downtime) and native event-time watermark handling without managing cluster worker VMs.'"
    },
    {
      azureSnowflakeTech: "Azure Data Factory (ADF)",
      gcpTech: "Cloud Composer (Apache Airflow)",
      analogy: "Both schedule and orchestrate multi-step data pipelines.",
      keyDifferences: [
        "ADF: Visual UI drag-and-drop canvas with JSON configuration behind the scenes.",
        "Cloud Composer: Managed Apache Airflow written as pure Python-as-Code (DAGs). Highly testable with CI/CD and modular unit tests.",
        "Extensibility: Cloud Composer can trigger any external API, BigQuery job, Dataproc cluster, or Dataflow pipeline using native GCP Airflow operators."
      ],
      googleInterviewTrap: "Google engineering culture strongly favors Code-over-GUI. Highlight that you write Python DAGs with modular tasks, dynamic task mapping, and automated unit testing rather than relying on point-and-click UI tools."
    },
    {
      azureSnowflakeTech: "ADLS Gen2 (Data Lake)",
      gcpTech: "Google Cloud Storage (GCS)",
      analogy: "The massive, cheap storage warehouse where all raw files, parquet tables, and backups live.",
      keyDifferences: [
        "Both are high-durability (99.999999999% 11 9s) object storage.",
        "ADLS Gen2 uses hierarchical namespaces (real directory structures). GCS uses a flat namespace with virtual prefix directories.",
        "GCS integrates natively with BigQuery via BigLake external tables, allowing SQL queries directly over Parquet/Iceberg files in GCS without loading."
      ],
      googleInterviewTrap: "Mention BigQuery BigLake external tables: 'We can query Parquet files stored in GCS directly from BigQuery without data duplication using BigLake storage delegations.'"
    },
    {
      azureSnowflakeTech: "dbt Cloud",
      gcpTech: "Dataform (Native to BigQuery)",
      analogy: "Writing modular SQL transformation models with Git version control and dependency graphs.",
      keyDifferences: [
        "Both use SQL SELECT statements as models and generate dependency DAGs.",
        "Dataform is fully integrated into the Google Cloud Console for BigQuery at zero additional software licensing cost.",
        "dbt Core is also widely used inside Google for analytical engineering teams."
      ],
      googleInterviewTrap: "Mention how dbt or Dataform enforces data contracts, schema testing (not_null, unique), and documentation lineage automatically inside the BigQuery catalog."
    },
    {
      azureSnowflakeTech: "Power BI",
      gcpTech: "Google Looker",
      analogy: "The dashboard layer where executives and business stakeholders look at numbers.",
      keyDifferences: [
        "Power BI: Uses DAX and Power Query with imported or DirectQuery models.",
        "Looker: Centered around LookML (Looker Modeling Language) — a centralized semantic metrics layer defining business metrics (e.g. 'Active User', 'Net Revenue') once in code so no two dashboards show conflicting numbers."
      ],
      googleInterviewTrap: "Google values single-source-of-truth metrics. Emphasize that Looker's semantic modeling layer prevents metric discrepancy across departments."
    }
  ],

  // 🔬 Zero-Gimmick Technical Deep Dives (Mastering Your Actual Stack)
  techDeepDives: [
    {
      id: "deep-snowflake",
      title: "Snowflake Internals Masterclass: Defend Every Line on Your Resume",
      category: "Data Warehousing",
      summary: "Understand exactly how Snowflake stores, compresses, and queries data so you never freeze when an interviewer asks about performance tuning.",
      topics: [
        {
          name: "1. Micro-Partitions & Pruning",
          content: "Snowflake does NOT use traditional B-Tree indexes! Instead, all table data is divided into immutable 'Micro-Partitions' (50MB to 500MB uncompressed, stored columnar). For every micro-partition, Snowflake automatically stores metadata: the min/max values of every column, distinct count, and NULL counts. When you execute a query with WHERE order_date >= '2025-01-01', Snowflake checks the metadata and skips 95% of micro-partitions without reading them. This is called 'Partition Pruning'."
        },
        {
          name: "2. Clustering Keys & Reclustering",
          content: "By default, micro-partitions are organized by the order data was inserted. If you frequently filter by (store_id, customer_id), and data arrived randomly, those IDs are scattered across thousands of micro-partitions. By defining a CLUSTER BY (order_date, store_id), Snowflake reorganizes the micro-partitions so rows with the same store_id live together. Interview rule: Only cluster large tables (>1TB). Clustering small tables wastes money on automatic background clustering credits!"
        },
        {
          name: "3. Virtual Warehouses & Spilling",
          content: "A Snowflake Warehouse is pure compute (independent EC2/Azure VMs). If a query needs more memory than the warehouse RAM, it starts 'Spilling to Local Storage' (fast SSD), and if that fills, 'Spilling to Remote Storage' (slow cloud storage blob). When an interviewer asks 'How do you fix high remote spill?', answer: 1) Scale up the warehouse to a larger size with more RAM, or 2) Reduce data scanned by improving partition pruning and eliminating large cross-joins."
        },
        {
          name: "4. Zero-Copy Cloning",
          content: "When you run CREATE TABLE orders_dev CLONE orders_prod;, Snowflake does NOT duplicate the storage! It simply duplicates the metadata pointers to the existing immutable micro-partitions. You pay $0 extra storage until you modify the dev table (Copy-on-Write). This is how you test schema migrations safely."
        }
      ]
    },
    {
      id: "deep-pyspark",
      title: "PySpark & Databricks Architecture: Driver, Worker, Shuffle & OOMs",
      category: "Big Data Compute",
      summary: "Master the mechanics of Apache Spark execution, DAG optimization, memory management, and data skew resolution.",
      topics: [
        {
          name: "1. Driver vs Worker Executors",
          content: "The Driver is the master process: it parses your Python code, builds the Directed Acyclic Graph (DAG), optimizes the execution plan via Catalyst Optimizer, and schedules tasks. The Worker Executors are JVM processes running on cluster nodes that actually execute the tasks and store data partitions in memory."
        },
        {
          name: "2. Narrow vs Wide Transformations (The Shuffle)",
          content: "Narrow Transformations (map, filter, withColumn): Each input partition contributes to only ONE output partition. No data moves between machines over the network. Extremely fast!\nWide Transformations (groupBy, join, distinct, repartition): Data must be re-hashed and sent across the physical network between all executors so that records with the same key end up on the same worker. This network transfer is called a 'SHUFFLE' and is the #1 cause of pipeline slowdowns and timeouts."
        },
        {
          name: "3. Broadcast Hash Join",
          content: "If you join a 10TB transaction fact table with a 50MB customer dimension table, a standard join shuffles all 10TB of data across the network! Instead, use broadcast(dim_customer): Spark copies the 50MB table to all worker nodes once, converting the join into a fast local memory lookup and eliminating 100% of the shuffle!"
        },
        {
          name: "4. Solving Data Skew & Key Salting",
          content: "If 1 out of 100 partitions contains 90% of the data (e.g. customer_id = NULL or a viral product ID), 99 worker cores will finish in 10 seconds, but 1 worker will struggle for 2 hours and eventually crash with OOM (Out Of Memory). Fix: 'Key Salting' — append a random integer (0..9) to the skewed key, perform a partial aggregation, and then run a secondary aggregation over the unsalted key."
        }
      ]
    },
    {
      id: "deep-gcp",
      title: "Google BigQuery & Cloud Dataflow Architecture",
      category: "GCP Big Data",
      summary: "Understand Google's internal systems (Dremel, Colossus, Capacitor, and Apache Beam) to speak like a Staff Google Engineer.",
      topics: [
        {
          name: "1. BigQuery Serverless Slot Architecture",
          content: "BigQuery does not have virtual warehouses. It allocates virtual CPUs called 'Slots'. A query is broken into stages: Stage 1 reads partitions from Colossus (columnar Capacitor format), Stage 2 aggregates data in memory, Stage 3 merges results. BigQuery dynamically scales slots up and down per query, charging by default $6.25 per TB of data scanned, or through committed slot capacity."
        },
        {
          name: "2. Partitioning vs Clustering in BigQuery",
          content: "Partitioning divides a table into distinct physical daily/hourly segments (e.g. PARTITION BY DATE(order_timestamp)). Queries with WHERE order_timestamp >= '2025-01-01' prune unneeded partitions entirely. Clustering sorts the data within each partition by up to 4 columns (e.g. CLUSTER BY customer_id, product_id). This allows BigQuery to skip blocks within partitions, drastically slashing query bytes and cost."
        },
        {
          name: "3. Apache Beam / Dataflow Streaming Watermarks",
          content: "A Watermark is Dataflow's clock for event time: it is a guarantee that the system believes all data older than timestamp T has arrived. If an event arrives with timestamp < Watermark, it is 'late data'. Allowed Lateness tells Dataflow how long to keep the window open for late arrivals before discarding or emitting to a Dead Letter Sink."
        }
      ]
    }
  ],

  // 🛡️ Resume Defense Q&A: Master Your Real Projects
  resumeDefenseSuite: [
    {
      project: "Siemens Energy: Next-Gen Analytics Lakehouse (Azure Databricks + Snowflake)",
      questions: [
        {
          q: "How did you convert 40,000+ database objects to Snowflake without errors?",
          answer: "We had legacy SQL Server and SAP HANA schemas. I helped write a Python automated parser using regex and SQL AST libraries to translate dialect differences (e.g. converting NVARCHAR to VARCHAR, date format syntax, and IDENTITY to AUTOINCREMENT). We then deployed them via automated Snowflake stored procedures executed through Azure DevOps CI/CD pipelines, validating row counts and schema integrity with automated reconciliation scripts."
        },
        {
          q: "Why did you use Azure Databricks with PySpark instead of running SQL inside Snowflake directly?",
          answer: "Snowflake is great for SQL transformations, but our supply chain data arrived from varied external ERP systems and API endpoints requiring complex data cleansing, schema drift validation, and multi-hop Bronze-to-Silver curation. PySpark on Databricks gave us resilient distributed memory for heavy wrangling, parallel API extraction, and complex windowing before loading clean dimensional tables into Snowflake."
        },
        {
          q: "How did you optimize PySpark jobs to reduce compute costs by 32%?",
          answer: "1) We tuned spark.sql.shuffle.partitions down from the default 200 on smaller hourly pipelines to avoid overhead from hundreds of tiny empty tasks. 2) We enabled Adaptive Query Execution (AQE) to dynamically coalesce shuffle partitions and convert sort-merge joins into broadcast hash joins at runtime. 3) We identified join key data skew on supplier IDs and applied key salting."
        }
      ]
    },
    {
      project: "The Coca-Cola Company: BI Migration & ADF Pipelines",
      questions: [
        {
          q: "How did you structure 40+ ADF pipelines across diverse business domains?",
          answer: "We built metadata-driven pipelines instead of hardcoding 40 separate ADF pipelines. We used a configuration control table in Azure SQL DB listing source tables, target paths, watermark columns, and load frequency. A single master ADF pipeline with a Lookup activity and ForEach loop dynamically triggered parameterized child pipelines, dramatically reducing maintenance overhead."
        },
        {
          q: "How did you implement dbt Cloud with Snowflake?",
          answer: "We structured dbt into three layers: 1) Staging models (light cleaning, renaming columns, casting data types), 2) Intermediate models (business logic, joining transactions with exchange rates), and 3) Marts (final Star Schema fact and dimension tables). We used dbt incremental models with unique_key to only process new/updated daily records rather than rebuilding full tables every night."
        },
        {
          q: "What cluster keys did you choose on Snowflake and why?",
          answer: "Our largest fact table was daily sales transactions (billions of rows). We analyzed query profiles and saw that 90% of business queries filtered on sale_date and operating_unit_id. We set CLUSTER BY (sale_date, operating_unit_id), which brought average query execution time down from 25 seconds to under 4 seconds by allowing Snowflake to prune 85%+ of micro-partitions."
        }
      ]
    }
  ]
};
