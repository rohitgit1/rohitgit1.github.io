// High-Scale Engineering Workspace & Telemetry Data
const PREP_DATA = {
  "targetRoles": [
    {
      "id": "role-de",
      "title": "Senior Data Engineer (L5)",
      "organization": "Core Data / Google Cloud / Ads Infrastructure",
      "profileAlignment": "Primary Target (Distributed Systems & Scale)",
      "barDifficulty": "High",
      "compensationRange": "$280k - $380k USD / ₹65L - ₹95L INR",
      "evaluationFocus": "Rigorous focus on distributed stream/batch processing (Apache Beam, Spark), columnar warehouse internals (BigQuery Capacitor/Dremel), real-time CDC, and Kimball dimensional schemas under high query concurrency.",
      "interviewRounds": [
        {
          "name": "Round 1: Python Data Structures & Algorithms",
          "desc": "LeetCode Medium/Hard (Focus: Graph DAGs, Heaps, Sliding Window, Monotonic Stacks, Hash Lookups)"
        },
        {
          "name": "Round 2: Scalable Data Processing Algorithms",
          "desc": "Custom aggregators, streaming stateful windowing, topological sorting, memory limits"
        },
        {
          "name": "Round 3: Advanced SQL & Dimensional Modeling",
          "desc": "Complex analytical window functions, session boundary detection, SCD Type 1-6 modeling"
        },
        {
          "name": "Round 4: Large-Scale Distributed System Design",
          "desc": "Real-time streaming vs batch, Pub/Sub sharding, Dataflow watermarks, Bigtable schema design, idempotency"
        },
        {
          "name": "Round 5: Googliness & Technical Leadership",
          "desc": "Navigating ambiguous technical roadmaps, cross-team influence, incident post-mortem culture"
        }
      ],
      "strengthsNeeded": {
        "dsa": 8,
        "sql": 9,
        "systemDesign": 9,
        "cloud": 9,
        "businessMetrics": 6,
        "clientFacing": 4
      },
      "googleCareersQuery": "https://www.google.com/about/careers/applications/jobs/results/?q=%22Data%20Engineer%22&level=MID_LEVEL&level=SENIOR_LEVEL"
    },
    {
      "id": "role-bie",
      "title": "Business Intelligence Engineer / Analytics Engineer (L5)",
      "organization": "Finance / People Operations / Google Cloud GTM",
      "profileAlignment": "High Match (Analytics & Data Warehouse Focus)",
      "barDifficulty": "Moderate",
      "compensationRange": "$240k - $340k USD / ₹55L - ₹80L INR",
      "evaluationFocus": "Heavily evaluates complex SQL mastery (multi-stage CTEs, cumulative windowing, QUALIFY deduplication), Kimball Star Schemas, semantic metrics layers, and automated data quality validation pipelines.",
      "interviewRounds": [
        {
          "name": "Round 1: Advanced Analytical SQL",
          "desc": "Multi-table joins, sessionization, recursive CTEs, BigQuery partition pruning, query performance tuning"
        },
        {
          "name": "Round 2: Dimensional Architecture & Data Modeling",
          "desc": "Fact & dimension modeling, surrogate key lifecycles, semantic metrics layer (LookML/dbt), SCD Type 2"
        },
        {
          "name": "Round 3: Practical Python Data Automation",
          "desc": "Data extraction, REST API consumption, schema validation, automated pipeline error handling"
        },
        {
          "name": "Round 4: Analytical Problem Solving & Metrics",
          "desc": "Defining North Star KPIs, diagnosing metric anomalies, experimentation analysis"
        },
        {
          "name": "Round 5: Technical Communication & Leadership",
          "desc": "Stakeholder management, translating data insights to director-level executive leadership"
        }
      ],
      "strengthsNeeded": {
        "dsa": 5,
        "sql": 10,
        "systemDesign": 7,
        "cloud": 8,
        "businessMetrics": 9,
        "clientFacing": 7
      },
      "googleCareersQuery": "https://www.google.com/about/careers/applications/jobs/results/?q=%22Business%20Intelligence%22%20OR%20%22Analytics%20Engineer%22"
    },
    {
      "id": "role-cse",
      "title": "Customer Solutions Engineer - Data & Cloud (L5)",
      "organization": "Google Cloud Enterprise Engineering",
      "profileAlignment": "Strong Match (Enterprise Architecture & Delivery)",
      "barDifficulty": "Moderate",
      "compensationRange": "$260k - $360k USD / ₹60L - ₹85L INR",
      "evaluationFocus": "Evaluates client cloud data modernization: designing migrations from legacy systems (Teradata/Hadoop/Snowflake) to BigQuery, tuning streaming Dataflow pipelines, and defending reference architectures to enterprise CTOs.",
      "interviewRounds": [
        {
          "name": "Round 1: Practical Python Scripting",
          "desc": "Data transformations, pipeline automation, REST integrations, robust error handling"
        },
        {
          "name": "Round 2: Cloud Data Architecture & Migration",
          "desc": "Architecting large-scale migrations from on-prem/multi-cloud to Google Cloud data platforms"
        },
        {
          "name": "Round 3: Technical Debugging & Incident Triage",
          "desc": "Diagnosing slow analytical queries, pipeline backpressure, and data consistency anomalies"
        },
        {
          "name": "Round 4: Technical Solutioning & Executive Defense",
          "desc": "Presenting architectural trade-offs, security, and TCO cost models to senior enterprise architects"
        },
        {
          "name": "Round 5: Googliness & Collaboration",
          "desc": "Customer empathy, cross-functional collaboration with Google Cloud product & engineering teams"
        }
      ],
      "strengthsNeeded": {
        "dsa": 5,
        "sql": 8,
        "systemDesign": 9,
        "cloud": 10,
        "businessMetrics": 7,
        "clientFacing": 9
      },
      "googleCareersQuery": "https://www.google.com/about/careers/applications/jobs/results/?q=%22Customer%20Solutions%20Engineer%22%20data"
    },
    {
      "id": "role-pso",
      "title": "Cloud Consultant / Technical Architect - Data Platforms (L5)",
      "organization": "Google Cloud Professional Services Organization (PSO)",
      "profileAlignment": "High Match (Enterprise Lakehouse & Modernization)",
      "barDifficulty": "Moderate-High",
      "compensationRange": "$270k - $370k USD / ₹65L - ₹90L INR",
      "evaluationFocus": "Focuses on strategic enterprise data platform design: distributed lakehouses, data mesh architectures, cross-cloud governance, and automated CI/CD for data pipelines.",
      "interviewRounds": [
        {
          "name": "Round 1: Enterprise Data Architecture & Design",
          "desc": "Designing enterprise lakehouse, data governance, multi-region replication, and compliance"
        },
        {
          "name": "Round 2: Google Cloud Big Data Deep Dive",
          "desc": "First-principles mechanics of BigQuery slots, Dataflow event-time watermarking, and Bigtable"
        },
        {
          "name": "Round 3: Enterprise Migration & Dual-Run Strategies",
          "desc": "Zero-downtime cutover strategies, parallel reconciliation pipelines, and rollback architectures"
        },
        {
          "name": "Round 4: Delivery Leadership & Risk Scoping",
          "desc": "Technical roadmapping, implementation risk management, and architectural governance"
        },
        {
          "name": "Round 5: Googliness & Leadership",
          "desc": "Managing technical disagreements, executive mentoring, establishing technical standards"
        }
      ],
      "strengthsNeeded": {
        "dsa": 5,
        "sql": 8,
        "systemDesign": 10,
        "cloud": 10,
        "businessMetrics": 7,
        "clientFacing": 9
      },
      "googleCareersQuery": "https://www.google.com/about/careers/applications/jobs/results/?q=%22Professional%20Services%22%20%22Data%22"
    },
    {
      "id": "role-swe-data",
      "title": "Software Engineer - Data Systems & Infrastructure (SWE L5)",
      "organization": "Core Systems / BigQuery Engine / Cloud Infrastructure",
      "profileAlignment": "Stretch Target (Low-Level Systems & Distributed Engines)",
      "barDifficulty": "Very High",
      "compensationRange": "$320k - $420k USD / ₹75L - ₹1.1Cr INR",
      "evaluationFocus": "High algorithmic coding bar (Graphs, DP, Trees) combined with deep distributed systems engineering: RPC protocols, consensus (Raft/Paxos), multi-version concurrency control (MVCC), and cache coherence.",
      "interviewRounds": [
        {
          "name": "Round 1: Algorithms & Data Structures",
          "desc": "Algorithmic problem solving in Python/Java/C++, optimal O(N) space and time guarantees"
        },
        {
          "name": "Round 2: Algorithms & Advanced Data Structures",
          "desc": "Graph theory, dynamic programming, priority queues, and complex recursion"
        },
        {
          "name": "Round 3: Distributed Storage & Systems Infrastructure",
          "desc": "Storage engines, replication, consensus, network partitioning (CAP theorem), locking"
        },
        {
          "name": "Round 4: Concurrency & System Design",
          "desc": "Multithreading, memory barriers, thread safety, API contract design"
        },
        {
          "name": "Round 5: Googliness & Leadership",
          "desc": "Driving engineering excellence, architectural ownership, blameless post-mortem culture"
        }
      ],
      "strengthsNeeded": {
        "dsa": 10,
        "sql": 6,
        "systemDesign": 10,
        "cloud": 7,
        "businessMetrics": 3,
        "clientFacing": 2
      },
      "googleCareersQuery": "https://www.google.com/about/careers/applications/jobs/results/?q=%22Software%20Engineer%22%20data"
    },
    {
      "id": "role-tsc",
      "title": "Technical Solutions Consultant - Data Systems (L5)",
      "organization": "Global Customer Operations / Internal Platforms",
      "profileAlignment": "Direct Match (Operational Engineering & Scripting)",
      "barDifficulty": "Moderate",
      "compensationRange": "$230k - $320k USD / ₹50L - ₹75L INR",
      "evaluationFocus": "Pragmatic data engineering: SQL debugging, automated Python pipelines, database indexing, telemetry monitoring, and rapid resolution of high-severity production pipeline failures.",
      "interviewRounds": [
        {
          "name": "Round 1: SQL Debugging & Performance",
          "desc": "Optimizing queries, identifying data skew, resolving metric discrepancies"
        },
        {
          "name": "Round 2: Python Scripting & Automation",
          "desc": "Automated ETL scripting, error handling, rate limiting, and API webhooks"
        },
        {
          "name": "Round 3: Technical Systems Troubleshooting",
          "desc": "Root cause analysis of complex distributed pipeline failures and data corruption"
        },
        {
          "name": "Round 4: Analytical Systems Case Study",
          "desc": "Designing automated telemetry dashboards and proactive pipeline monitoring"
        },
        {
          "name": "Round 5: Googliness & Operational Excellence",
          "desc": "Incident communication, stakeholder prioritization, continuous improvement"
        }
      ],
      "strengthsNeeded": {
        "dsa": 5,
        "sql": 9,
        "systemDesign": 7,
        "cloud": 7,
        "businessMetrics": 8,
        "clientFacing": 8
      },
      "googleCareersQuery": "https://www.google.com/about/careers/applications/jobs/results/?q=%22Technical%20Solutions%20Consultant%22"
    }
  ],
  "dsaProblems": [
    {
      "id": "dsa-1",
      "lcNumber": 1,
      "title": "Two Sum",
      "category": "Arrays & Hashing",
      "difficulty": "Easy",
      "deRelevance": "Fundamental lookup pattern. Key for fast in-memory joins, hash lookups, and entity matching.",
      "problemStatement": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume each input has exactly one solution.",
      "pythonStarter": "def twoSum(nums: list[int], target: int) -> list[int]:\n    # Implement one-pass hash map\n    pass",
      "optimalSolution": "def twoSum(nums: list[int], target: int) -> list[int]:\n    seen = {}\n    for i, num in enumerate(nums):\n        diff = target - num\n        if diff in seen:\n            return [seen[diff], i]\n        seen[num] = i\n    return []",
      "testHarness": "def run_tests():\n    test_cases = [\n        ([2, 7, 11, 15], 9, [0, 1]),\n        ([3, 2, 4], 6, [1, 2]),\n        ([3, 3], 6, [0, 1]),\n        ([-1, -2, -3, -4, -5], -8, [2, 4])\n    ]\n    results = []\n    for i, (nums, target, expected) in enumerate(test_cases):\n        actual = twoSum(nums, target)\n        passed = sorted(actual) == sorted(expected)\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(N) single pass",
      "spaceComplexity": "O(N) hash map",
      "interviewerTips": "Mention single-pass vs two-pass. Discuss memory overhead when N is billions of records (why streaming requires distributed hashing or partition by key).",
      "leetcodeUrl": "https://leetcode.com/problems/two-sum/"
    },
    {
      "id": "dsa-2",
      "lcNumber": 242,
      "title": "Valid Anagram",
      "category": "Arrays & Hashing",
      "difficulty": "Easy",
      "deRelevance": "Frequency map comparison pattern for schema reconciliation, payload checksums, and token validation.",
      "problemStatement": "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase.",
      "pythonStarter": "def isAnagram(s: str, t: str) -> bool:\n    # Implement frequency array or hash map\n    pass",
      "optimalSolution": "from collections import Counter\n\ndef isAnagram(s: str, t: str) -> bool:\n    return Counter(s) == Counter(t)",
      "testHarness": "def run_tests():\n    test_cases = [\n        (\"anagram\", \"nagaram\", True),\n        (\"rat\", \"car\", False),\n        (\"a\", \"ab\", False),\n        (\"rail safety\", \"fairy tales\", True)\n    ]\n    results = []\n    for i, (s, t, expected) in enumerate(test_cases):\n        actual = isAnagram(s, t)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(N) where N is length of string",
      "spaceComplexity": "O(1) if lowercase english alphabet (26 chars)",
      "interviewerTips": "Always ask what the character set is: ASCII, Unicode? In distributed big data, discussing HashPartitioner on string frequency vectors shows depth.",
      "leetcodeUrl": "https://leetcode.com/problems/valid-anagram/"
    },
    {
      "id": "dsa-3",
      "lcNumber": 49,
      "title": "Group Anagrams",
      "category": "Arrays & Hashing",
      "difficulty": "Medium",
      "deRelevance": "Canonical grouping and key derivation pattern. Identical to grouping telemetry records by custom fingerprint in ETL.",
      "problemStatement": "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
      "pythonStarter": "from collections import defaultdict\n\ndef groupAnagrams(strs: list[str]) -> list[list[str]]:\n    # Implement grouping by sorted tuple or count tuple\n    pass",
      "optimalSolution": "from collections import defaultdict\n\ndef groupAnagrams(strs: list[str]) -> list[list[str]]:\n    groups = defaultdict(list)\n    for s in strs:\n        # Character count tuple as hashable dict key\n        count = [0] * 26\n        for c in s:\n            count[ord(c) - ord('a')] += 1\n        groups[tuple(count)].append(s)\n    return list(groups.values())",
      "testHarness": "def run_tests():\n    test_cases = [\n        ([\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"], 3),\n        ([\"\"], 1),\n        ([\"a\"], 1)\n    ]\n    results = []\n    for i, (strs, expected_group_count) in enumerate(test_cases):\n        actual = groupAnagrams(strs)\n        passed = len(actual) == expected_group_count\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {len(actual)} groups, Expected {expected_group_count})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(N * K) where N is number of strings and K is max length",
      "spaceComplexity": "O(N * K) storing strings in hash map",
      "interviewerTips": "Explain why using character frequency tuple O(N*K) is asymptotically superior to sorting each string O(N * K log K).",
      "leetcodeUrl": "https://leetcode.com/problems/group-anagrams/"
    },
    {
      "id": "dsa-4",
      "lcNumber": 238,
      "title": "Product of Array Except Self",
      "category": "Arrays & Hashing",
      "difficulty": "Medium",
      "deRelevance": "Prefix and suffix cumulative aggregations without division. Directly models cumulative metrics in streaming windows.",
      "problemStatement": "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]. Must run in O(N) time and without using the division operation.",
      "pythonStarter": "def productExceptSelf(nums: list[int]) -> list[int]:\n    # Implement prefix & suffix accumulators\n    pass",
      "optimalSolution": "def productExceptSelf(nums: list[int]) -> list[int]:\n    n = len(nums)\n    output = [1] * n\n    # Prefix products\n    prefix = 1\n    for i in range(n):\n        output[i] = prefix\n        prefix *= nums[i]\n    # Suffix products accumulated in reverse\n    suffix = 1\n    for i in range(n - 1, -1, -1):\n        output[i] *= suffix\n        suffix *= nums[i]\n    return output",
      "testHarness": "def run_tests():\n    test_cases = [\n        ([1, 2, 3, 4], [24, 12, 8, 6]),\n        ([-1, 1, 0, -3, 3], [0, 0, 9, 0, 0])\n    ]\n    results = []\n    for i, (nums, expected) in enumerate(test_cases):\n        actual = productExceptSelf(nums)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(N) two linear passes",
      "spaceComplexity": "O(1) extra space (excluding output array)",
      "interviewerTips": "Highlight why division is forbidden: division by zero crashes, and floating point loss occurs on massive metrics.",
      "leetcodeUrl": "https://leetcode.com/problems/product-of-array-except-self/"
    },
    {
      "id": "dsa-5",
      "lcNumber": 560,
      "title": "Subarray Sum Equals K",
      "category": "Prefix Sums",
      "difficulty": "Medium",
      "deRelevance": "Essential for financial reconciliation, rolling window balance calculations, and log metric threshold alerts.",
      "problemStatement": "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.",
      "pythonStarter": "def subarraySum(nums: list[int], k: int) -> int:\n    # Implement prefix sum with hash map\n    pass",
      "optimalSolution": "def subarraySum(nums: list[int], k: int) -> int:\n    count = 0\n    current_sum = 0\n    prefix_sums = {0: 1}\n    for num in nums:\n        current_sum += num\n        if current_sum - k in prefix_sums:\n            count += prefix_sums[current_sum - k]\n        prefix_sums[current_sum] = prefix_sums.get(current_sum, 0) + 1\n    return count",
      "testHarness": "def run_tests():\n    test_cases = [\n        ([1, 1, 1], 2, 2),\n        ([1, 2, 3], 3, 2),\n        ([1, -1, 0], 0, 3),\n        ([3, 4, 7, 2, -3, 1, 4, 2], 7, 4)\n    ]\n    results = []\n    for i, (nums, k, expected) in enumerate(test_cases):\n        actual = subarraySum(nums, k)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(N) single pass",
      "spaceComplexity": "O(N) prefix sum frequency map",
      "interviewerTips": "Crucial edge case: initialize prefix_sums with {0: 1} to handle subarrays starting at index 0. Note that sliding window does NOT work if array contains negative numbers.",
      "leetcodeUrl": "https://leetcode.com/problems/subarray-sum-equals-k/"
    },
    {
      "id": "dsa-6",
      "lcNumber": 125,
      "title": "Valid Palindrome",
      "category": "Two Pointers",
      "difficulty": "Easy",
      "deRelevance": "In-place string sanitation and two-pointer convergence. Essential pattern for clean ETL record sanitization.",
      "problemStatement": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Return true if it is a palindrome, false otherwise.",
      "pythonStarter": "def isPalindrome(s: str) -> bool:\n    # Implement in-place two pointers\n    pass",
      "optimalSolution": "def isPalindrome(s: str) -> bool:\n    left, right = 0, len(s) - 1\n    while left < right:\n        while left < right and not s[left].isalnum():\n            left += 1\n        while left < right and not s[right].isalnum():\n            right -= 1\n        if s[left].lower() != s[right].lower():\n            return False\n        left += 1\n        right -= 1\n    return True",
      "testHarness": "def run_tests():\n    test_cases = [\n        (\"A man, a plan, a canal: Panama\", True),\n        (\"race a car\", False),\n        (\" \", True),\n        (\"0P\", False)\n    ]\n    results = []\n    for i, (s, expected) in enumerate(test_cases):\n        actual = isPalindrome(s)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(N) single pass",
      "spaceComplexity": "O(1) in-place without auxiliary string copy",
      "interviewerTips": "Do not create a sanitized string copy `[c for c in s if c.isalnum()]` because that uses O(N) extra memory. In-place two pointers demonstrates senior memory discipline.",
      "leetcodeUrl": "https://leetcode.com/problems/valid-palindrome/"
    },
    {
      "id": "dsa-7",
      "lcNumber": 15,
      "title": "3Sum",
      "category": "Two Pointers",
      "difficulty": "Medium",
      "deRelevance": "Multi-way joins, entity reconciliation, and duplicate elimination in large data sets.",
      "problemStatement": "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. The solution set must not contain duplicate triplets.",
      "pythonStarter": "def threeSum(nums: list[int]) -> list[list[int]]:\n    # Implement sorting + two pointers\n    pass",
      "optimalSolution": "def threeSum(nums: list[int]) -> list[list[int]]:\n    nums.sort()\n    res = []\n    n = len(nums)\n    for i in range(n - 2):\n        if i > 0 and nums[i] == nums[i - 1]:\n            continue\n        left, right = i + 1, n - 1\n        while left < right:\n            total = nums[i] + nums[left] + nums[right]\n            if total < 0:\n                left += 1\n            elif total > 0:\n                right -= 1\n            else:\n                res.append([nums[i], nums[left], nums[right]])\n                while left < right and nums[left] == nums[left + 1]:\n                    left += 1\n                while left < right and nums[right] == nums[right - 1]:\n                    right -= 1\n                left += 1\n                right -= 1\n    return res",
      "testHarness": "def run_tests():\n    test_cases = [\n        ([-1,0,1,2,-1,-4], [[-1,-1,2],[-1,0,1]]),\n        ([0,1,1], []),\n        ([0,0,0], [[0,0,0]])\n    ]\n    results = []\n    for i, (nums, expected) in enumerate(test_cases):\n        actual = threeSum(nums)\n        passed = len(actual) == len(expected)\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(N^2) sorting + two-pointer sweeps",
      "spaceComplexity": "O(1) extra space (excluding output array)",
      "interviewerTips": "Highlight duplicate skipping logic (`nums[i] == nums[i-1]` and `nums[left] == nums[left+1]`). This shows mastery of edge cases without relying on a slow hash set.",
      "leetcodeUrl": "https://leetcode.com/problems/3sum/"
    },
    {
      "id": "dsa-8",
      "lcNumber": 11,
      "title": "Container With Most Water",
      "category": "Two Pointers",
      "difficulty": "Medium",
      "deRelevance": "Greedy boundary convergence and resource maximization. Key intuition for optimal batch packing and slot sizing.",
      "problemStatement": "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return maximum amount of water.",
      "pythonStarter": "def maxArea(height: list[int]) -> int:\n    # Implement greedy two pointers\n    pass",
      "optimalSolution": "def maxArea(height: list[int]) -> int:\n    left, right = 0, len(height) - 1\n    max_water = 0\n    while left < right:\n        width = right - left\n        h = min(height[left], height[right])\n        max_water = max(max_water, width * h)\n        if height[left] < height[right]:\n            left += 1\n        else:\n            right -= 1\n    return max_water",
      "testHarness": "def run_tests():\n    test_cases = [\n        ([1,8,6,2,5,4,8,3,7], 49),\n        ([1,1], 1),\n        ([4,3,2,1,4], 16)\n    ]\n    results = []\n    for i, (height, expected) in enumerate(test_cases):\n        actual = maxArea(height)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(N) single pass",
      "spaceComplexity": "O(1) constant memory",
      "interviewerTips": "Prove why moving the shorter pointer is always mathematically correct: moving the taller pointer can never increase the area since width shrinks and height is bottlenecked by the shorter wall.",
      "leetcodeUrl": "https://leetcode.com/problems/container-with-most-water/"
    },
    {
      "id": "dsa-9",
      "lcNumber": 3,
      "title": "Longest Substring Without Repeating Characters",
      "category": "Sliding Window",
      "difficulty": "Medium",
      "deRelevance": "Core sliding window pattern for session identification, log tokenization, and rolling event deduplication.",
      "problemStatement": "Given a string s, find the length of the longest substring without repeating characters.",
      "pythonStarter": "def lengthOfLongestSubstring(s: str) -> int:\n    # Implement sliding window\n    pass",
      "optimalSolution": "def lengthOfLongestSubstring(s: str) -> int:\n    char_map = {}\n    left = 0\n    max_len = 0\n    for right, ch in enumerate(s):\n        if ch in char_map and char_map[ch] >= left:\n            left = char_map[ch] + 1\n        char_map[ch] = right\n        max_len = max(max_len, right - left + 1)\n    return max_len",
      "testHarness": "def run_tests():\n    test_cases = [\n        (\"abcabcbb\", 3),\n        (\"bbbbb\", 1),\n        (\"pwwkew\", 3),\n        (\"\", 0),\n        (\"abba\", 2)\n    ]\n    results = []\n    for i, (s, expected) in enumerate(test_cases):\n        actual = lengthOfLongestSubstring(s)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(N) single pass sliding window",
      "spaceComplexity": "O(min(M, N)) where M is alphabet size",
      "interviewerTips": "The common bug is failing on test cases like 'abba' where the duplicate character was seen before the current 'left' pointer. Ensure char_map[ch] >= left is checked!",
      "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    },
    {
      "id": "dsa-10",
      "lcNumber": 76,
      "title": "Minimum Window Substring",
      "category": "Sliding Window",
      "difficulty": "Hard",
      "deRelevance": "Canonical Google Hard. Substring matching under constraint frequency counts. Directly parallels complex rule-engine parsing.",
      "problemStatement": "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string \"\".",
      "pythonStarter": "from collections import Counter\n\ndef minWindow(s: str, t: str) -> str:\n    # Implement need vs have sliding window\n    pass",
      "optimalSolution": "from collections import Counter\n\ndef minWindow(s: str, t: str) -> str:\n    if not t or not s: return \"\"\n    target_counts = Counter(t)\n    window_counts = {}\n    required = len(target_counts)\n    formed = 0\n    left = 0\n    ans = float(\"inf\"), None, None\n    for right, ch in enumerate(s):\n        window_counts[ch] = window_counts.get(ch, 0) + 1\n        if ch in target_counts and window_counts[ch] == target_counts[ch]:\n            formed += 1\n        while left <= right and formed == required:\n            c = s[left]\n            if (right - left + 1) < ans[0]:\n                ans = (right - left + 1, left, right)\n            window_counts[c] -= 1\n            if c in target_counts and window_counts[c] < target_counts[c]:\n                formed -= 1\n            left += 1\n    return \"\" if ans[0] == float(\"inf\") else s[ans[1] : ans[2] + 1]",
      "testHarness": "def run_tests():\n    test_cases = [\n        (\"ADOBECODEBANC\", \"ABC\", \"BANC\"),\n        (\"a\", \"a\", \"a\"),\n        (\"a\", \"aa\", \"\")\n    ]\n    results = []\n    for i, (s, t, expected) in enumerate(test_cases):\n        actual = minWindow(s, t)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got '{actual}', Expected '{expected}')\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(S + T) where S and T are lengths of strings",
      "spaceComplexity": "O(S + T) storing character frequencies",
      "interviewerTips": "Track 'formed' vs 'required' counts instead of checking whether the entire dictionary matches at every step (which would degrade to O(26 * S)).",
      "leetcodeUrl": "https://leetcode.com/problems/minimum-window-substring/"
    },
    {
      "id": "dsa-11",
      "lcNumber": 424,
      "title": "Longest Repeating Character Replacement",
      "category": "Sliding Window",
      "difficulty": "Medium",
      "deRelevance": "Fault-tolerant sliding window. Models maintaining maximum pipeline throughput with up to K dropped or corrupt packets.",
      "problemStatement": "You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times. Return the length of the longest substring containing the same letter you can get after performing above operations.",
      "pythonStarter": "def characterReplacement(s: str, k: int) -> int:\n    # Implement sliding window with max frequency tracker\n    pass",
      "optimalSolution": "def characterReplacement(s: str, k: int) -> int:\n    count = {}\n    max_len = 0\n    max_freq = 0\n    left = 0\n    for right, ch in enumerate(s):\n        count[ch] = count.get(ch, 0) + 1\n        max_freq = max(max_freq, count[ch])\n        # Window size - max_freq is the number of characters to replace\n        if (right - left + 1) - max_freq > k:\n            count[s[left]] -= 1\n            left += 1\n        max_len = max(max_len, right - left + 1)\n    return max_len",
      "testHarness": "def run_tests():\n    test_cases = [\n        (\"ABAB\", 2, 4),\n        (\"AABABBA\", 1, 4),\n        (\"ABBB\", 2, 4)\n    ]\n    results = []\n    for i, (s, k, expected) in enumerate(test_cases):\n        actual = characterReplacement(s, k)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(N) single pass sliding window",
      "spaceComplexity": "O(26) = O(1) character map",
      "interviewerTips": "Explain why max_freq does not need to be decremented when shrinking the window: a smaller max_freq will never yield a larger valid window length.",
      "leetcodeUrl": "https://leetcode.com/problems/longest-repeating-character-replacement/"
    },
    {
      "id": "dsa-12",
      "lcNumber": 20,
      "title": "Valid Parentheses",
      "category": "Stack",
      "difficulty": "Easy",
      "deRelevance": "Parser foundations. Essential for verifying SQL query ASTs, JSON formatting, and XML tag closure in data pipelines.",
      "problemStatement": "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      "pythonStarter": "def isValid(s: str) -> bool:\n    # Implement LIFO stack\n    pass",
      "optimalSolution": "def isValid(s: str) -> bool:\n    stack = []\n    mapping = {')': '(', '}': '{', ']': '['}\n    for char in s:\n        if char in mapping:\n            top = stack.pop() if stack else '#'\n            if mapping[char] != top:\n                return False\n        else:\n            stack.append(char)\n    return not stack",
      "testHarness": "def run_tests():\n    test_cases = [\n        (\"()\", True),\n        (\"()[]{}\", True),\n        (\"(]\", False),\n        (\"([)]\", False),\n        (\"{[]}\", True)\n    ]\n    results = []\n    for i, (s, expected) in enumerate(test_cases):\n        actual = isValid(s)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(N) linear scan",
      "spaceComplexity": "O(N) stack storage",
      "interviewerTips": "Mention edge cases immediately: odd string length, string starting with closing bracket, unclosed brackets left on stack.",
      "leetcodeUrl": "https://leetcode.com/problems/valid-parentheses/"
    },
    {
      "id": "dsa-13",
      "lcNumber": 155,
      "title": "Min Stack",
      "category": "Stack",
      "difficulty": "Medium",
      "deRelevance": "Maintaining O(1) state statistics alongside dynamic data updates. Critical for streaming telemetry aggregations.",
      "problemStatement": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time O(1).",
      "pythonStarter": "class MinStack:\n    def __init__(self):\n        pass\n    def push(self, val: int) -> None:\n        pass\n    def pop(self) -> None:\n        pass\n    def top(self) -> int:\n        pass\n    def getMin(self) -> int:\n        pass",
      "optimalSolution": "class MinStack:\n    def __init__(self):\n        self.stack = []\n        self.min_stack = []\n\n    def push(self, val: int) -> None:\n        self.stack.append(val)\n        cur_min = min(val, self.min_stack[-1] if self.min_stack else val)\n        self.min_stack.append(cur_min)\n\n    def pop(self) -> None:\n        self.stack.pop()\n        self.min_stack.pop()\n\n    def top(self) -> int:\n        return self.stack[-1]\n\n    def getMin(self) -> int:\n        return self.min_stack[-1]",
      "testHarness": "def run_tests():\n    ms = MinStack()\n    ms.push(-2)\n    ms.push(0)\n    ms.push(-3)\n    m1 = ms.getMin() # -3\n    ms.pop()\n    t1 = ms.top() # 0\n    m2 = ms.getMin() # -2\n    passed = (m1 == -3 and t1 == 0 and m2 == -2)\n    return f\"Test 1: {'PASSED' if passed else 'FAILED'} (Got min1={m1}, top={t1}, min2={m2})\"\nprint(run_tests())",
      "timeComplexity": "O(1) for all operations",
      "spaceComplexity": "O(N) auxiliary min tracker",
      "interviewerTips": "Explain the space optimization: only push to min_stack when val <= current min, rather than mirroring every single element.",
      "leetcodeUrl": "https://leetcode.com/problems/min-stack/"
    },
    {
      "id": "dsa-14",
      "lcNumber": 739,
      "title": "Daily Temperatures",
      "category": "Monotonic Stack",
      "difficulty": "Medium",
      "deRelevance": "Next-greater-element pattern. Used for calculating timeout delays, SLA breaches, and time until event completion.",
      "problemStatement": "Given an array of integers temperatures represents daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0.",
      "pythonStarter": "def dailyTemperatures(temperatures: list[int]) -> list[int]:\n    # Implement monotonic decreasing stack\n    pass",
      "optimalSolution": "def dailyTemperatures(temperatures: list[int]) -> list[int]:\n    n = len(temperatures)\n    res = [0] * n\n    stack = [] # stores indices\n    for i, temp in enumerate(temperatures):\n        while stack and temperatures[stack[-1]] < temp:\n            prev_i = stack.pop()\n            res[prev_i] = i - prev_i\n        stack.append(i)\n    return res",
      "testHarness": "def run_tests():\n    test_cases = [\n        ([73,74,75,71,69,72,76,73], [1,1,4,2,1,1,0,0]),\n        ([30,40,50,60], [1,1,1,0]),\n        ([30,60,90], [1,1,0])\n    ]\n    results = []\n    for i, (temps, expected) in enumerate(test_cases):\n        actual = dailyTemperatures(temps)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(N) each element pushed and popped at most once",
      "spaceComplexity": "O(N) monotonic stack storage",
      "interviewerTips": "Emphasize why this is O(N) even with a nested while loop: amortized analysis proves every element enters and leaves the stack at most once.",
      "leetcodeUrl": "https://leetcode.com/problems/daily-temperatures/"
    },
    {
      "id": "dsa-15",
      "lcNumber": 33,
      "title": "Search in Rotated Sorted Array",
      "category": "Binary Search",
      "difficulty": "Medium",
      "deRelevance": "Logarithmic lookup in segmented or partitioned distributed partitions (e.g. partition boundaries in BigQuery/Snowflake).",
      "problemStatement": "There is an integer array nums sorted in ascending order (with distinct values), rotated at an unknown pivot. Given nums and an integer target, return the index of target if it is in nums, or -1 if not in nums. Must be O(log N).",
      "pythonStarter": "def search(nums: list[int], target: int) -> int:\n    # Implement modified binary search\n    pass",
      "optimalSolution": "def search(nums: list[int], target: int) -> int:\n    left, right = 0, len(nums) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if nums[mid] == target:\n            return mid\n        # Left half is normally sorted\n        if nums[left] <= nums[mid]:\n            if nums[left] <= target < nums[mid]:\n                right = mid - 1\n            else:\n                left = mid + 1\n        # Right half is normally sorted\n        else:\n            if nums[mid] < target <= nums[right]:\n                left = mid + 1\n            else:\n                right = mid - 1\n    return -1",
      "testHarness": "def run_tests():\n    test_cases = [\n        ([4,5,6,7,0,1,2], 0, 4),\n        ([4,5,6,7,0,1,2], 3, -1),\n        ([1], 0, -1),\n        ([3, 1], 1, 1)\n    ]\n    results = []\n    for i, (nums, target, expected) in enumerate(test_cases):\n        actual = search(nums, target)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(log N) binary search",
      "spaceComplexity": "O(1) constant memory",
      "interviewerTips": "Identify which half of the array is strictly sorted. At least one half is guaranteed to be sorted. Then verify if target falls within that sorted half.",
      "leetcodeUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
    },
    {
      "id": "dsa-16",
      "lcNumber": 153,
      "title": "Find Minimum in Rotated Sorted Array",
      "category": "Binary Search",
      "difficulty": "Medium",
      "deRelevance": "Locating inflection points, anomaly spikes, or offset checkpoints in circular telemetry buffers.",
      "problemStatement": "Given the sorted rotated array nums of unique elements, return the minimum element of this array in O(log N) time.",
      "pythonStarter": "def findMin(nums: list[int]) -> int:\n    # Implement binary search for pivot inflection\n    pass",
      "optimalSolution": "def findMin(nums: list[int]) -> int:\n    left, right = 0, len(nums) - 1\n    while left < right:\n        mid = (left + right) // 2\n        if nums[mid] > nums[right]:\n            left = mid + 1\n        else:\n            right = mid\n    return nums[left]",
      "testHarness": "def run_tests():\n    test_cases = [\n        ([3,4,5,1,2], 1),\n        ([4,5,6,7,0,1,2], 0),\n        ([11,13,15,17], 11)\n    ]\n    results = []\n    for i, (nums, expected) in enumerate(test_cases):\n        actual = findMin(nums)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(log N)",
      "spaceComplexity": "O(1)",
      "interviewerTips": "Notice the comparison `nums[mid] > nums[right]`: if true, the minimum must lie strictly to the right of mid (`left = mid + 1`). Otherwise `right = mid`.",
      "leetcodeUrl": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
    },
    {
      "id": "dsa-17",
      "lcNumber": 206,
      "title": "Reverse Linked List",
      "category": "Linked List",
      "difficulty": "Easy",
      "deRelevance": "Pointer reassignment, immutable chain reversing, and undo/redo history tracking in pipeline steps.",
      "problemStatement": "Given the head of a singly linked list, reverse the list, and return the reversed list.",
      "pythonStarter": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reverseList(head):\n    # Iterative pointer reversal\n    pass",
      "optimalSolution": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef reverseList(head):\n    prev = None\n    curr = head\n    while curr:\n        next_temp = curr.next\n        curr.next = prev\n        prev = curr\n        curr = next_temp\n    return prev",
      "testHarness": "def run_tests():\n    # Helper to build list\n    def build_list(vals):\n        dummy = ListNode(0)\n        curr = dummy\n        for v in vals:\n            curr.next = ListNode(v)\n            curr = curr.next\n        return dummy.next\n    def to_vals(node):\n        out = []\n        while node:\n            out.append(node.val)\n            node = node.next\n        return out\n    \n    head = build_list([1, 2, 3, 4, 5])\n    rev = reverseList(head)\n    actual = to_vals(rev)\n    passed = actual == [5, 4, 3, 2, 1]\n    return f\"Test 1: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected [5, 4, 3, 2, 1])\"\nprint(run_tests())",
      "timeComplexity": "O(N) single pass",
      "spaceComplexity": "O(1) in-place pointer swapping",
      "interviewerTips": "Always show both iterative O(1) space and recursive O(N) stack approaches to illustrate pros and cons of call stack depth in large datasets.",
      "leetcodeUrl": "https://leetcode.com/problems/reverse-linked-list/"
    },
    {
      "id": "dsa-18",
      "lcNumber": 141,
      "title": "Linked List Cycle (Fast & Slow Pointers)",
      "category": "Linked List",
      "difficulty": "Easy",
      "deRelevance": "Floyd's Cycle-Finding Algorithm. Critical for detecting circular pipeline dependencies and infinite loop bugs.",
      "problemStatement": "Given head, the head of a linked list, determine if the linked list has a cycle in it. Return true if there is a cycle, otherwise false. Can you solve it in O(1) memory?",
      "pythonStarter": "def hasCycle(head) -> bool:\n    # Implement Floyd's Tortoise and Hare\n    pass",
      "optimalSolution": "def hasCycle(head) -> bool:\n    if not head or not head.next:\n        return False\n    slow = head\n    fast = head.next\n    while slow != fast:\n        if not fast or not fast.next:\n            return False\n        slow = slow.next\n        fast = fast.next.next\n    return True",
      "testHarness": "def run_tests():\n    class ListNode:\n        def __init__(self, x):\n            self.val = x\n            self.next = None\n    n1, n2, n3, n4 = ListNode(3), ListNode(2), ListNode(0), ListNode(-4)\n    n1.next = n2; n2.next = n3; n3.next = n4; n4.next = n2 # Cycle at pos 1\n    res1 = hasCycle(n1)\n    \n    na, nb = ListNode(1), ListNode(2)\n    na.next = nb # No cycle\n    res2 = hasCycle(na)\n    \n    passed = res1 is True and res2 is False\n    return f\"Test 1: {'PASSED' if passed else 'FAILED'} (Got cycle={res1}, no_cycle={res2})\"\nprint(run_tests())",
      "timeComplexity": "O(N) Floyd's cycle detection",
      "spaceComplexity": "O(1) constant pointers",
      "interviewerTips": "Explain the mathematical proof: if a cycle exists of length C, the distance between fast and slow increases by 1 each step, so fast is guaranteed to catch slow in at most C steps.",
      "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/"
    },
    {
      "id": "dsa-19",
      "lcNumber": 21,
      "title": "Merge Two Sorted Lists",
      "category": "Linked List",
      "difficulty": "Easy",
      "deRelevance": "Foundational pattern for Sort-Merge Joins in distributed databases (Postgres, Spark, Snowflake).",
      "problemStatement": "You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists. Return the head of the merged linked list.",
      "pythonStarter": "def mergeTwoLists(list1, list2):\n    # Implement dummy head merge\n    pass",
      "optimalSolution": "class ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef mergeTwoLists(list1, list2):\n    dummy = ListNode(-1)\n    curr = dummy\n    while list1 and list2:\n        if list1.val <= list2.val:\n            curr.next = list1\n            list1 = list1.next\n        else:\n            curr.next = list2\n            list2 = list2.next\n        curr = curr.next\n    curr.next = list1 if list1 else list2\n    return dummy.next",
      "testHarness": "def run_tests():\n    class ListNode:\n        def __init__(self, val=0, next=None):\n            self.val = val\n            self.next = next\n    def build(vals):\n        dummy = ListNode(0)\n        c = dummy\n        for v in vals:\n            c.next = ListNode(v)\n            c = c.next\n        return dummy.next\n    def to_list(node):\n        res = []\n        while node:\n            res.append(node.val)\n            node = node.next\n        return res\n        \n    l1 = build([1, 2, 4])\n    l2 = build([1, 3, 4])\n    merged = mergeTwoLists(l1, l2)\n    actual = to_list(merged)\n    passed = actual == [1, 1, 2, 3, 4, 4]\n    return f\"Test 1: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected [1, 1, 2, 3, 4, 4])\"\nprint(run_tests())",
      "timeComplexity": "O(N + M) single pass",
      "spaceComplexity": "O(1) in-place splicing with dummy node",
      "interviewerTips": "Connecting this directly to Spark's SortMergeJoinExec proves practical data engineering acumen.",
      "leetcodeUrl": "https://leetcode.com/problems/merge-two-sorted-lists/"
    },
    {
      "id": "dsa-20",
      "lcNumber": 146,
      "title": "LRU Cache (Buffer Pool & Query Cache)",
      "category": "Design & Data Structures",
      "difficulty": "Medium",
      "deRelevance": "Critical for query result caching, database buffer pool eviction (Postgres/BigQuery), and distributed state storage.",
      "problemStatement": "Design a data structure that follows the constraints of a Least Recently Used (LRU) cache. Implement LRUCache class with get(key) and put(key, value) in O(1) average time complexity.",
      "pythonStarter": "class LRUCache:\n    def __init__(self, capacity: int):\n        # Initialize LRU Cache\n        pass\n\n    def get(self, key: int) -> int:\n        pass\n\n    def put(self, key: int, value: int) -> None:\n        pass",
      "optimalSolution": "from collections import OrderedDict\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.capacity = capacity\n        self.cache = OrderedDict()\n\n    def get(self, key: int) -> int:\n        if key not in self.cache:\n            return -1\n        self.cache.move_to_end(key)\n        return self.cache[key]\n\n    def put(self, key: int, value: int) -> None:\n        if key in self.cache:\n            self.cache.move_to_end(key)\n        self.cache[key] = value\n        if len(self.cache) > self.capacity:\n            self.cache.popitem(last=False)",
      "testHarness": "def run_tests():\n    lru = LRUCache(2)\n    lru.put(1, 1)\n    lru.put(2, 2)\n    r1 = lru.get(1) # returns 1\n    lru.put(3, 3) # evicts key 2\n    r2 = lru.get(2) # returns -1 (not found)\n    lru.put(4, 4) # evicts key 1\n    r3 = lru.get(1) # returns -1\n    r4 = lru.get(3) # returns 3\n    r5 = lru.get(4) # returns 4\n    \n    passed = (r1 == 1 and r2 == -1 and r3 == -1 and r4 == 3 and r5 == 4)\n    return f\"Test 1: {'PASSED' if passed else 'FAILED'} (Got {[r1, r2, r3, r4, r5]}, Expected [1, -1, -1, 3, 4])\"\nprint(run_tests())",
      "timeComplexity": "O(1) for both get and put operations",
      "spaceComplexity": "O(Capacity) space complexity",
      "interviewerTips": "Interviewers will ask how you implement this without OrderedDict: explain Doubly Linked List + HashMap. Mention thread safety with reader-writer locks in multi-threaded ingestion pipelines.",
      "leetcodeUrl": "https://leetcode.com/problems/lru-cache/"
    },
    {
      "id": "dsa-21",
      "lcNumber": 56,
      "title": "Merge Intervals",
      "category": "Intervals",
      "difficulty": "Medium",
      "deRelevance": "Essential for session merging, resource allocation, and scheduling backfill execution windows.",
      "problemStatement": "Given an array of intervals where intervals[i] = [start, end], merge all overlapping intervals, and return an array of non-overlapping intervals.",
      "pythonStarter": "def merge(intervals: list[list[int]]) -> list[list[int]]:\n    # Implement interval merging\n    pass",
      "optimalSolution": "def merge(intervals: list[list[int]]) -> list[list[int]]:\n    intervals.sort(key=lambda x: x[0])\n    merged = []\n    for interval in intervals:\n        if not merged or merged[-1][1] < interval[0]:\n            merged.append(interval)\n        else:\n            merged[-1][1] = max(merged[-1][1], interval[1])\n    return merged",
      "testHarness": "def run_tests():\n    test_cases = [\n        ([[1,3],[2,6],[8,10],[15,18]], [[1,6],[8,10],[15,18]]),\n        ([[1,4],[4,5]], [[1,5]]),\n        ([[1,4],[0,4]], [[0,4]]),\n        ([[1,4],[2,3]], [[1,4]])\n    ]\n    results = []\n    for i, (intervals, expected) in enumerate(test_cases):\n        actual = merge(intervals)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(N log N) sorting step",
      "spaceComplexity": "O(N) for output list",
      "interviewerTips": "Note how sorting by start time converts a 2D geometric comparison problem into a linear scan. Mention parallel chunk merging if data spans multiple distributed machines.",
      "leetcodeUrl": "https://leetcode.com/problems/merge-intervals/"
    },
    {
      "id": "dsa-22",
      "lcNumber": 57,
      "title": "Insert Interval",
      "category": "Intervals",
      "difficulty": "Medium",
      "deRelevance": "Inserting an ad-hoc pipeline execution window into an existing schedule without recreating all partitions.",
      "problemStatement": "You are given an array of non-overlapping intervals intervals where intervals[i] = [start, end] sorted in ascending order by start. You are also given an interval newInterval = [start, end]. Insert newInterval into intervals such that intervals is still sorted and non-overlapping.",
      "pythonStarter": "def insert(intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:\n    # Linear three-phase merge\n    pass",
      "optimalSolution": "def insert(intervals: list[list[int]], newInterval: list[int]) -> list[list[int]]:\n    res = []\n    i = 0\n    n = len(intervals)\n    # 1. Add all intervals ending before newInterval starts\n    while i < n and intervals[i][1] < newInterval[0]:\n        res.append(intervals[i])\n        i += 1\n    # 2. Merge all overlapping intervals with newInterval\n    while i < n and intervals[i][0] <= newInterval[1]:\n        newInterval[0] = min(newInterval[0], intervals[i][0])\n        newInterval[1] = max(newInterval[1], intervals[i][1])\n        i += 1\n    res.append(newInterval)\n    # 3. Add remaining intervals\n    while i < n:\n        res.append(intervals[i])\n        i += 1\n    return res",
      "testHarness": "def run_tests():\n    test_cases = [\n        ([[1,3],[6,9]], [2,5], [[1,5],[6,9]]),\n        ([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8], [[1,2],[3,10],[12,16]])\n    ]\n    results = []\n    for i, (intervals, newInt, expected) in enumerate(test_cases):\n        actual = insert(intervals, newInt)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(N) single linear scan without sorting",
      "spaceComplexity": "O(N) for output array",
      "interviewerTips": "Because the input is already sorted, you can solve this in O(N) linear time without calling sort() which would cost O(N log N).",
      "leetcodeUrl": "https://leetcode.com/problems/insert-interval/"
    },
    {
      "id": "dsa-23",
      "lcNumber": 347,
      "title": "Top K Frequent Elements in Stream",
      "category": "Heaps",
      "difficulty": "Medium",
      "deRelevance": "Top search queries, trending hashtags, high-frequency fraud identifiers in real-time pipelines.",
      "problemStatement": "Given an integer array nums and an integer k, return the k most frequent elements. Can you solve it better than O(N log N)?",
      "pythonStarter": "from collections import Counter\nimport heapq\n\ndef topKFrequent(nums: list[int], k: int) -> list[int]:\n    # Implement using Min-Heap of size K or Bucket Sort\n    pass",
      "optimalSolution": "from collections import Counter\nimport heapq\n\ndef topKFrequent(nums: list[int], k: int) -> list[int]:\n    count = Counter(nums)\n    heap = []\n    for num, freq in count.items():\n        heapq.heappush(heap, (freq, num))\n        if len(heap) > k:\n            heapq.heappop(heap)\n    return [num for freq, num in heap]",
      "testHarness": "def run_tests():\n    test_cases = [\n        ([1,1,1,2,2,3], 2, [1, 2]),\n        ([1], 1, [1]),\n        ([4,1,-1,2,-1,2,3], 2, [-1, 2])\n    ]\n    results = []\n    for i, (nums, k, expected) in enumerate(test_cases):\n        actual = topKFrequent(nums, k)\n        passed = sorted(actual) == sorted(expected)\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(N log K) with min-heap of size K",
      "spaceComplexity": "O(N + K) hash map + heap",
      "interviewerTips": "Discuss Bucket Sort alternative for O(N) linear time when frequency <= N. Discuss Count-Min Sketch for true infinite distributed streaming at Google scale.",
      "leetcodeUrl": "https://leetcode.com/problems/top-k-frequent-elements/"
    },
    {
      "id": "dsa-24",
      "lcNumber": 295,
      "title": "Find Median from Running Data Stream",
      "category": "Heaps",
      "difficulty": "Hard",
      "deRelevance": "Essential for 50th percentile (P50) / P99 latency tracking, streaming metrics, and dynamic threshold alerting.",
      "problemStatement": "Design a data structure that supports adding integers from a continuous data stream and finding the current median in O(1) time.",
      "pythonStarter": "import heapq\n\nclass MedianFinder:\n    def __init__(self):\n        pass\n    def addNum(self, num: int) -> None:\n        pass\n    def findMedian(self) -> float:\n        pass",
      "optimalSolution": "import heapq\n\nclass MedianFinder:\n    def __init__(self):\n        self.small = [] # Max-heap (invert values)\n        self.large = [] # Min-heap\n\n    def addNum(self, num: int) -> None:\n        heapq.heappush(self.small, -num)\n        if self.small and self.large and (-self.small[0] > self.large[0]):\n            val = -heapq.heappop(self.small)\n            heapq.heappush(self.large, val)\n        if len(self.small) > len(self.large) + 1:\n            val = -heapq.heappop(self.small)\n            heapq.heappush(self.large, val)\n        if len(self.large) > len(self.small):\n            val = heapq.heappop(self.large)\n            heapq.heappush(self.small, -val)\n\n    def findMedian(self) -> float:\n        if len(self.small) > len(self.large):\n            return float(-self.small[0])\n        return (-self.small[0] + self.large[0]) / 2.0",
      "testHarness": "def run_tests():\n    mf = MedianFinder()\n    mf.addNum(1)\n    mf.addNum(2)\n    m1 = mf.findMedian() # 1.5\n    mf.addNum(3)\n    m2 = mf.findMedian() # 2.0\n    passed = (abs(m1 - 1.5) < 1e-5 and abs(m2 - 2.0) < 1e-5)\n    return f\"Test 1: {'PASSED' if passed else 'FAILED'} (Got {[m1, m2]}, Expected [1.5, 2.0])\"\nprint(run_tests())",
      "timeComplexity": "O(log N) for addNum, O(1) for findMedian",
      "spaceComplexity": "O(N) storing stream elements",
      "interviewerTips": "At Google scale with billions of telemetry metrics, discuss T-Digest or HdrHistogram algorithms used in Google Monarch and Cloud Monitoring for approximate percentiles (P50/P90/P99) in constant memory.",
      "leetcodeUrl": "https://leetcode.com/problems/find-median-from-data-stream/"
    },
    {
      "id": "dsa-25",
      "lcNumber": 207,
      "title": "Course Schedule I (Cycle Detection in DAG)",
      "category": "Graphs & DAGs",
      "difficulty": "Medium",
      "deRelevance": "Detecting circular dependencies in Airflow, dbt models, and Dataflow pipelines before pipeline launch.",
      "problemStatement": "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [a, b] indicates you must take course b before a. Return true if you can finish all courses, or false if a cycle exists.",
      "pythonStarter": "def canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:\n    # Implement cycle detection with Kahn's algorithm or DFS\n    pass",
      "optimalSolution": "from collections import deque, defaultdict\n\ndef canFinish(numCourses: int, prerequisites: list[list[int]]) -> bool:\n    graph = defaultdict(list)\n    in_degree = [0] * numCourses\n    for dest, src in prerequisites:\n        graph[src].append(dest)\n        in_degree[dest] += 1\n    queue = deque([i for i in range(numCourses) if in_degree[i] == 0])\n    visited_count = 0\n    while queue:\n        node = queue.popleft()\n        visited_count += 1\n        for neighbor in graph[node]:\n            in_degree[neighbor] -= 1\n            if in_degree[neighbor] == 0:\n                queue.append(neighbor)\n    return visited_count == numCourses",
      "testHarness": "def run_tests():\n    test_cases = [\n        (2, [[1,0]], True),\n        (2, [[1,0],[0,1]], False), # Cycle\n        (3, [[0,1],[1,2]], True)\n    ]\n    results = []\n    for i, (n, prereqs, expected) in enumerate(test_cases):\n        actual = canFinish(n, prereqs)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(V + E) vertices and edges",
      "spaceComplexity": "O(V + E) for adjacency graph and in-degree array",
      "interviewerTips": "Highlight that Kahn's algorithm (BFS with in-degree) is naturally non-recursive, avoiding Python's recursion limit on deep pipeline DAGs.",
      "leetcodeUrl": "https://leetcode.com/problems/course-schedule/"
    },
    {
      "id": "dsa-26",
      "lcNumber": 210,
      "title": "Course Schedule II (Pipeline DAG Dependency Order)",
      "category": "Graphs & DAGs",
      "difficulty": "Medium",
      "deRelevance": "#1 Most Asked for DEs! Directly models Airflow/Dataflow pipeline task dependency resolution.",
      "problemStatement": "Return the ordering of courses you should take to finish all courses given prerequisites. If impossible due to a cycle, return an empty array.",
      "pythonStarter": "from collections import deque, defaultdict\n\ndef findOrder(numCourses: int, prerequisites: list[list[int]]) -> list[int]:\n    # Implement Kahn's Topological Sort\n    pass",
      "optimalSolution": "from collections import deque, defaultdict\n\ndef findOrder(numCourses: int, prerequisites: list[list[int]]) -> list[int]:\n    graph = defaultdict(list)\n    in_degree = [0] * numCourses\n    for dest, src in prerequisites:\n        graph[src].append(dest)\n        in_degree[dest] += 1\n    queue = deque([i for i in range(numCourses) if in_degree[i] == 0])\n    order = []\n    while queue:\n        node = queue.popleft()\n        order.append(node)\n        for neighbor in graph[node]:\n            in_degree[neighbor] -= 1\n            if in_degree[neighbor] == 0:\n                queue.append(neighbor)\n    return order if len(order) == numCourses else []",
      "testHarness": "def run_tests():\n    test_cases = [\n        (2, [[1, 0]], [0, 1]),\n        (4, [[1,0],[2,0],[3,1],[3,2]], [0, 1, 2, 3]),\n        (2, [[1, 0], [0, 1]], [])\n    ]\n    results = []\n    for i, (n, prereqs, expected) in enumerate(test_cases):\n        actual = findOrder(n, prereqs)\n        passed = (actual == expected) or (len(actual) == len(expected) and len(expected) > 0)\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(V + E) vertices and edges",
      "spaceComplexity": "O(V + E) for adjacency list + in-degree",
      "interviewerTips": "Explicitly relate this to building an execution plan for an ETL/ELT pipeline. Highlight how Kahn's algorithm detects circular dependencies automatically.",
      "leetcodeUrl": "https://leetcode.com/problems/course-schedule-ii/"
    },
    {
      "id": "dsa-27",
      "lcNumber": 200,
      "title": "Number of Islands",
      "category": "Graphs & DAGs",
      "difficulty": "Medium",
      "deRelevance": "Connected components, fraud network cluster detection, and spatial partitioning in geo-distributed data.",
      "problemStatement": "Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.",
      "pythonStarter": "def numIslands(grid: list[list[str]]) -> int:\n    # Implement BFS or DFS connected component traversal\n    pass",
      "optimalSolution": "from collections import deque\n\ndef numIslands(grid: list[list[str]]) -> int:\n    if not grid: return 0\n    rows, cols = len(grid), len(grid[0])\n    islands = 0\n    def bfs(r, c):\n        queue = deque([(r, c)])\n        grid[r][c] = '0'\n        while queue:\n            row, col = queue.popleft()\n            for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:\n                nr, nc = row + dr, col + dc\n                if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == '1':\n                    grid[nr][nc] = '0'\n                    queue.append((nr, nc))\n    for r in range(rows):\n        for c in range(cols):\n            if grid[r][c] == '1':\n                bfs(r, c)\n                islands += 1\n    return islands",
      "testHarness": "def run_tests():\n    g1 = [\n      [\"1\",\"1\",\"1\",\"1\",\"0\"],\n      [\"1\",\"1\",\"0\",\"1\",\"0\"],\n      [\"1\",\"1\",\"0\",\"0\",\"0\"],\n      [\"0\",\"0\",\"0\",\"0\",\"0\"]\n    ]\n    g2 = [\n      [\"1\",\"1\",\"0\",\"0\",\"0\"],\n      [\"1\",\"1\",\"0\",\"0\",\"0\"],\n      [\"0\",\"0\",\"1\",\"0\",\"0\"],\n      [\"0\",\"0\",\"0\",\"1\",\"1\"]\n    ]\n    r1 = numIslands(g1)\n    r2 = numIslands(g2)\n    passed = (r1 == 1 and r2 == 3)\n    return f\"Test 1: {'PASSED' if passed else 'FAILED'} (Got g1={r1}, g2={r2}, Expected 1, 3)\"\nprint(run_tests())",
      "timeComplexity": "O(M * N) visits every cell at most twice",
      "spaceComplexity": "O(min(M, N)) BFS queue width",
      "interviewerTips": "Mutating the grid in-place (`grid[r][c] = '0'`) saves an extra visited matrix. Mention Disjoint Set Union (Union-Find) for dynamic distributed graph clustering.",
      "leetcodeUrl": "https://leetcode.com/problems/number-of-islands/"
    },
    {
      "id": "dsa-28",
      "lcNumber": 322,
      "title": "Coin Change",
      "category": "Dynamic Programming",
      "difficulty": "Medium",
      "deRelevance": "Unbounded knapsack optimization. Models container resource allocation, warehouse credit sizing, and slot packing.",
      "problemStatement": "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money. Return the fewest number of coins that you need to make up that amount. If that amount cannot be made up, return -1.",
      "pythonStarter": "def coinChange(coins: list[int], amount: int) -> int:\n    # Implement bottom-up dynamic programming\n    pass",
      "optimalSolution": "def coinChange(coins: list[int], amount: int) -> int:\n    dp = [float('inf')] * (amount + 1)\n    dp[0] = 0\n    for coin in coins:\n        for x in range(coin, amount + 1):\n            dp[x] = min(dp[x], dp[x - coin] + 1)\n    return dp[amount] if dp[amount] != float('inf') else -1",
      "testHarness": "def run_tests():\n    test_cases = [\n        ([1, 2, 5], 11, 3),\n        ([2], 3, -1),\n        ([1], 0, 0)\n    ]\n    results = []\n    for i, (coins, amt, expected) in enumerate(test_cases):\n        actual = coinChange(coins, amt)\n        passed = actual == expected\n        results.append(f\"Test {i+1}: {'PASSED' if passed else 'FAILED'} (Got {actual}, Expected {expected})\")\n    return \"\\n\".join(results)\nprint(run_tests())",
      "timeComplexity": "O(Amount * len(coins))",
      "spaceComplexity": "O(Amount) 1D DP array",
      "interviewerTips": "Explain the bottom-up 1D DP transition state: `dp[x] = min(dp[x], dp[x - coin] + 1)`. Mention why greedy algorithms fail (e.g. coins [1, 3, 4] for amount 6: greedy gives 4+1+1=3 coins, optimal is 3+3=2 coins).",
      "leetcodeUrl": "https://leetcode.com/problems/coin-change/"
    }
  ],
  "schedule": [
    {
      "day": 1,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 1,
      "title": "Day 1: LC 1 - Two Sum",
      "pillar": "dsa",
      "focus": "LC 1 - Two Sum (Arrays & Hashing • Easy)",
      "dsaProblem": {
        "id": "dsa-1",
        "title": "LC 1 - Two Sum",
        "category": "Arrays & Hashing",
        "difficulty": "Easy",
        "leetcodeUrl": "https://leetcode.com/problems/two-sum/"
      },
      "sqlChallenge": {
        "id": "sql-1",
        "title": "Basic Window: ROW_NUMBER() vs RANK()"
      },
      "techTopic": "Snowflake: Micro-partitions & Pruning",
      "defenseTopic": "Siemens: 40k Object Migration AST Parser",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/two-sum/"
    },
    {
      "day": 2,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 1,
      "title": "Day 2: LC 242 - Valid Anagram",
      "pillar": "dsa",
      "focus": "LC 242 - Valid Anagram (Arrays & Hashing • Easy)",
      "dsaProblem": {
        "id": "dsa-2",
        "title": "LC 242 - Valid Anagram",
        "category": "Arrays & Hashing",
        "difficulty": "Easy",
        "leetcodeUrl": "https://leetcode.com/problems/valid-anagram/"
      },
      "sqlChallenge": {
        "id": "sql-1",
        "title": "DENSE_RANK() Top-N Per Category"
      },
      "techTopic": "Snowflake: Clustering Keys & Reclustering",
      "defenseTopic": "Siemens: Automated Schema Drift CI/CD",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/valid-anagram/"
    },
    {
      "day": 3,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 1,
      "title": "Day 3: LC 49 - Group Anagrams",
      "pillar": "dsa",
      "focus": "LC 49 - Group Anagrams (Arrays & Hashing • Medium)",
      "dsaProblem": {
        "id": "dsa-3",
        "title": "LC 49 - Group Anagrams",
        "category": "Arrays & Hashing",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/group-anagrams/"
      },
      "sqlChallenge": {
        "id": "sql-1",
        "title": "Running Totals: SUM() OVER (PARTITION BY)"
      },
      "techTopic": "Snowflake: Virtual Warehouse Spilling (Local/Remote)",
      "defenseTopic": "Siemens: 88% Query Latency Optimization",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/group-anagrams/"
    },
    {
      "day": 4,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 1,
      "title": "Day 4: LC 560 - Subarray Sum Equals K",
      "pillar": "dsa",
      "focus": "LC 560 - Subarray Sum Equals K (Prefix Sums • Medium)",
      "dsaProblem": {
        "id": "dsa-5",
        "title": "LC 560 - Subarray Sum Equals K",
        "category": "Prefix Sums",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/subarray-sum-equals-k/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "Frame Clauses: ROWS BETWEEN 6 PRECEDING"
      },
      "techTopic": "Snowflake: Zero-Copy Cloning & Time Travel",
      "defenseTopic": "Siemens: Bronze-to-Silver PySpark Ingestion",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/subarray-sum-equals-k/"
    },
    {
      "day": 5,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 1,
      "title": "Day 5: LC 238 - Product of Array Except Self",
      "pillar": "dsa",
      "focus": "LC 238 - Product of Array Except Self (Arrays & Hashing • Medium)",
      "dsaProblem": {
        "id": "dsa-4",
        "title": "LC 238 - Product of Array Except Self",
        "category": "Arrays & Hashing",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/product-of-array-except-self/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "LEAD and LAG for Time-Series Deltas"
      },
      "techTopic": "PySpark: JVM Memory (Driver vs Executor)",
      "defenseTopic": "Databricks: 32% Compute Cost Reduction",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/product-of-array-except-self/"
    },
    {
      "day": 6,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 1,
      "title": "Day 6: LC 125 - Valid Palindrome",
      "pillar": "dsa",
      "focus": "LC 125 - Valid Palindrome (Two Pointers • Easy)",
      "dsaProblem": {
        "id": "dsa-6",
        "title": "LC 125 - Valid Palindrome",
        "category": "Two Pointers",
        "difficulty": "Easy",
        "leetcodeUrl": "https://leetcode.com/problems/valid-palindrome/"
      },
      "sqlChallenge": {
        "id": "sql-1",
        "title": "Sessionization: Inactivity Boundary Triggers"
      },
      "techTopic": "PySpark: Shuffle Partitions & Adaptive Execution (AQE)",
      "defenseTopic": "Databricks: Shuffle Tuning 200 to Dynamic",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/valid-palindrome/"
    },
    {
      "day": 7,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 1,
      "title": "Day 7: LC 15 - 3Sum",
      "pillar": "dsa",
      "focus": "LC 15 - 3Sum (Two Pointers • Medium)",
      "dsaProblem": {
        "id": "dsa-7",
        "title": "LC 15 - 3Sum",
        "category": "Two Pointers",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/3sum/"
      },
      "sqlChallenge": {
        "id": "sql-1",
        "title": "Session IDs with Cumulative SUM()"
      },
      "techTopic": "PySpark: Mitigating Join Skew via Key Salting",
      "defenseTopic": "PySpark: Salted Join Implementation Code",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/3sum/"
    },
    {
      "day": 8,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 2,
      "title": "Day 8: LC 11 - Container With Most Water",
      "pillar": "dsa",
      "focus": "LC 11 - Container With Most Water (Two Pointers • Medium)",
      "dsaProblem": {
        "id": "dsa-8",
        "title": "LC 11 - Container With Most Water",
        "category": "Two Pointers",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/container-with-most-water/"
      },
      "sqlChallenge": {
        "id": "sql-4",
        "title": "Gaps & Islands: Consecutive Active Days"
      },
      "techTopic": "PySpark: Broadcast Hash Join vs Sort-Merge Join",
      "defenseTopic": "PySpark: Broadcast Join Threshold Guardrails",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/container-with-most-water/"
    },
    {
      "day": 9,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 2,
      "title": "Day 9: LC 3 - Longest Substring Without Repeats",
      "pillar": "dsa",
      "focus": "LC 3 - Longest Substring Without Repeats (Sliding Window • Medium)",
      "dsaProblem": {
        "id": "dsa-9",
        "title": "LC 3 - Longest Substring Without Repeats",
        "category": "Sliding Window",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
      },
      "sqlChallenge": {
        "id": "sql-5",
        "title": "Month-over-Month Retention Cohort Analysis"
      },
      "techTopic": "Azure ADF: Metadata-Driven Pipeline Framework",
      "defenseTopic": "Coca-Cola: 40+ ADF Parameterized Pipelines",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    },
    {
      "day": 10,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 2,
      "title": "Day 10: LC 76 - Minimum Window Substring",
      "pillar": "dsa",
      "focus": "LC 76 - Minimum Window Substring (Sliding Window • Hard)",
      "dsaProblem": {
        "id": "dsa-10",
        "title": "LC 76 - Minimum Window Substring",
        "category": "Sliding Window",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problems/minimum-window-substring/"
      },
      "sqlChallenge": {
        "id": "sql-2",
        "title": "BigQuery UNNEST() on Repeated STRUCTs"
      },
      "techTopic": "Azure ADLS Gen2: Hierarchical Namespace & ACLs",
      "defenseTopic": "Coca-Cola: ADLS Gen2 Multi-Region Architecture",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/minimum-window-substring/"
    },
    {
      "day": 11,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 2,
      "title": "Day 11: LC 424 - Character Replacement",
      "pillar": "dsa",
      "focus": "LC 424 - Character Replacement (Sliding Window • Medium)",
      "dsaProblem": {
        "id": "dsa-11",
        "title": "LC 424 - Character Replacement",
        "category": "Sliding Window",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/longest-repeating-character-replacement/"
      },
      "sqlChallenge": {
        "id": "sql-2",
        "title": "BigQuery ARRAY_AGG() & STRUCT Aggregation"
      },
      "techTopic": "Azure Key Vault & Managed Identity Security",
      "defenseTopic": "Coca-Cola: Slashing Pipeline MTTR (4h to 25m)",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/longest-repeating-character-replacement/"
    },
    {
      "day": 12,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 2,
      "title": "Day 12: LC 20 - Valid Parentheses",
      "pillar": "dsa",
      "focus": "LC 20 - Valid Parentheses (Stack • Easy)",
      "dsaProblem": {
        "id": "dsa-12",
        "title": "LC 20 - Valid Parentheses",
        "category": "Stack",
        "difficulty": "Easy",
        "leetcodeUrl": "https://leetcode.com/problems/valid-parentheses/"
      },
      "sqlChallenge": {
        "id": "sql-10",
        "title": "Recursive CTEs for Hierarchical Tree Queries"
      },
      "techTopic": "Cloud Storage: Object Stores vs Distributed Filesystems",
      "defenseTopic": "dbt Cloud: 3-Tier Staging, Intermediate, Marts",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/valid-parentheses/"
    },
    {
      "day": 13,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 2,
      "title": "Day 13: LC 155 - Min Stack",
      "pillar": "dsa",
      "focus": "LC 155 - Min Stack (Stack • Medium)",
      "dsaProblem": {
        "id": "dsa-13",
        "title": "LC 155 - Min Stack",
        "category": "Stack",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/min-stack/"
      },
      "sqlChallenge": {
        "id": "sql-9",
        "title": "Anti-joins and NULL-safe Equi-joins"
      },
      "techTopic": "Pub/Sub Architecture & Ordering Keys",
      "defenseTopic": "dbt Cloud: Automated Schema & Freshness Tests",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/min-stack/"
    },
    {
      "day": 14,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 2,
      "title": "Day 14: LC 739 - Daily Temperatures",
      "pillar": "dsa",
      "focus": "LC 739 - Daily Temperatures (Monotonic Stack • Medium)",
      "dsaProblem": {
        "id": "dsa-14",
        "title": "LC 739 - Daily Temperatures",
        "category": "Monotonic Stack",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/daily-temperatures/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "NTILE() and PERCENT_RANK() for Percentiles"
      },
      "techTopic": "Pub/Sub: Message Retention & Dead-Letter Queues",
      "defenseTopic": "Coca-Cola: Ingesting 12TB Monthly Sales Data",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/daily-temperatures/"
    },
    {
      "day": 15,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 3,
      "title": "Day 15: LC 84 - Largest Rectangle in Histogram",
      "pillar": "dsa",
      "focus": "LC 84 - Largest Rectangle in Histogram (Monotonic Stack • Hard)",
      "dsaProblem": {
        "id": "dsa-14",
        "title": "LC 84 - Largest Rectangle in Histogram",
        "category": "Monotonic Stack",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/"
      },
      "sqlChallenge": {
        "id": "sql-7",
        "title": "Real-Time Deduplication using QUALIFY"
      },
      "techTopic": "Dataflow: Streaming vs Batch Execution Graph",
      "defenseTopic": "Alert Webhooks & SLA Monitoring Architecture",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/"
    },
    {
      "day": 16,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 3,
      "title": "Day 16: LC 33 - Search in Rotated Sorted Array",
      "pillar": "dsa",
      "focus": "LC 33 - Search in Rotated Sorted Array (Binary Search • Medium)",
      "dsaProblem": {
        "id": "dsa-15",
        "title": "LC 33 - Search in Rotated Sorted Array",
        "category": "Binary Search",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
      },
      "sqlChallenge": {
        "id": "sql-7",
        "title": "BigQuery QUALIFY vs ROW_NUMBER Subqueries"
      },
      "techTopic": "BigQuery Storage: Capacitor Columnar & Colossus",
      "defenseTopic": "Siemens: Delta Lake / Parquet Compaction",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
    },
    {
      "day": 17,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 3,
      "title": "Day 17: LC 153 - Find Min in Rotated Sorted Array",
      "pillar": "dsa",
      "focus": "LC 153 - Find Min in Rotated Sorted Array (Binary Search • Medium)",
      "dsaProblem": {
        "id": "dsa-16",
        "title": "LC 153 - Find Min in Rotated Sorted Array",
        "category": "Binary Search",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "Rolling 7-Day & 30-Day Moving Averages"
      },
      "techTopic": "BigQuery Compute: Slots & Dremel Multi-Level Trees",
      "defenseTopic": "BigQuery Slot Dynamic Allocation Tuning",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
    },
    {
      "day": 18,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 3,
      "title": "Day 18: LC 206 - Reverse Linked List",
      "pillar": "dsa",
      "focus": "LC 206 - Reverse Linked List (Linked List • Easy)",
      "dsaProblem": {
        "id": "dsa-17",
        "title": "LC 206 - Reverse Linked List",
        "category": "Linked List",
        "difficulty": "Easy",
        "leetcodeUrl": "https://leetcode.com/problems/reverse-linked-list/"
      },
      "sqlChallenge": {
        "id": "sql-8",
        "title": "First-Touch vs Last-Touch Marketing Attribution"
      },
      "techTopic": "BigQuery Reservation: On-Demand vs Editions",
      "defenseTopic": "Query Cost Governance in Enterprise Lakes",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/reverse-linked-list/"
    },
    {
      "day": 19,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 3,
      "title": "Day 19: LC 141 - Linked List Cycle",
      "pillar": "dsa",
      "focus": "LC 141 - Linked List Cycle (Linked List • Easy)",
      "dsaProblem": {
        "id": "dsa-18",
        "title": "LC 141 - Linked List Cycle",
        "category": "Linked List",
        "difficulty": "Easy",
        "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/"
      },
      "sqlChallenge": {
        "id": "sql-9",
        "title": "Finding Missing Sequential IDs in Audit Logs"
      },
      "techTopic": "BigQuery Partitioning (Ingestion vs Date) & Clustering",
      "defenseTopic": "BigQuery Partition Pruning vs Snowflake",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/linked-list-cycle/"
    },
    {
      "day": 20,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 3,
      "title": "Day 20: LC 21 - Merge Two Sorted Lists",
      "pillar": "dsa",
      "focus": "LC 21 - Merge Two Sorted Lists (Linked List • Easy)",
      "dsaProblem": {
        "id": "dsa-19",
        "title": "LC 21 - Merge Two Sorted Lists",
        "category": "Linked List",
        "difficulty": "Easy",
        "leetcodeUrl": "https://leetcode.com/problems/merge-two-sorted-lists/"
      },
      "sqlChallenge": {
        "id": "sql-10",
        "title": "Hierarchical Org-Chart Traversal (Recursive CTE)"
      },
      "techTopic": "BigQuery Storage Write API Deduplication Streams",
      "defenseTopic": "High-Throughput CDC Streaming Ingestion",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/merge-two-sorted-lists/"
    },
    {
      "day": 21,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 3,
      "title": "Day 21: LC 143 - Reorder List",
      "pillar": "dsa",
      "focus": "LC 143 - Reorder List (Linked List • Medium)",
      "dsaProblem": {
        "id": "dsa-17",
        "title": "LC 143 - Reorder List",
        "category": "Linked List",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/reorder-list/"
      },
      "sqlChallenge": {
        "id": "sql-3",
        "title": "SCD Type 2 Point-in-Time Join Mechanics"
      },
      "techTopic": "Cloud Spanner: TrueTime & External Consistency",
      "defenseTopic": "Spanner Multi-Region High Availability",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/reorder-list/"
    },
    {
      "day": 22,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 4,
      "title": "Day 22: LC 19 - Remove Nth Node From End",
      "pillar": "dsa",
      "focus": "LC 19 - Remove Nth Node From End (Linked List • Medium)",
      "dsaProblem": {
        "id": "dsa-18",
        "title": "LC 19 - Remove Nth Node From End",
        "category": "Linked List",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
      },
      "sqlChallenge": {
        "id": "sql-3",
        "title": "Cumulative Distribution (CUME_DIST) Windowing"
      },
      "techTopic": "Cloud Bigtable: LSM Trees & Row Key Hotspotting",
      "defenseTopic": "Bigtable Tablet Server Load Balancing",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
    },
    {
      "day": 23,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 4,
      "title": "Day 23: Timed Drill: LC 15 + LC 3",
      "pillar": "dsa",
      "focus": "Timed Drill: LC 15 + LC 3 (Two Pointers & Window • Medium)",
      "dsaProblem": {
        "id": "dsa-7",
        "title": "Timed Drill: LC 15 + LC 3",
        "category": "Two Pointers & Window",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/3sum/"
      },
      "sqlChallenge": {
        "id": "sql-1",
        "title": "Comprehensive Sessionization Assessment"
      },
      "techTopic": "Kimball Star Schema: Fact vs Dimension Design",
      "defenseTopic": "Star Schema vs Denormalized BigQuery Tables",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/3sum/"
    },
    {
      "day": 24,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 4,
      "title": "Day 24: Timed Drill: LC 739 + LC 33",
      "pillar": "dsa",
      "focus": "Timed Drill: LC 739 + LC 33 (Stack & Binary Search • Medium)",
      "dsaProblem": {
        "id": "dsa-14",
        "title": "Timed Drill: LC 739 + LC 33",
        "category": "Stack & Binary Search",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/daily-temperatures/"
      },
      "sqlChallenge": {
        "id": "sql-4",
        "title": "Comprehensive Gaps & Islands Assessment"
      },
      "techTopic": "Slowly Changing Dimensions (SCD Types 1, 2, 3)",
      "defenseTopic": "SCD Type 2 Surrogate Keys & End Dates",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/daily-temperatures/"
    },
    {
      "day": 25,
      "phase": 1,
      "phaseName": "Phase 1: Foundations & Core Algorithmic Patterns",
      "week": 4,
      "title": "Day 25: Phase 1 Checkpoint Mock Exam",
      "pillar": "dsa",
      "focus": "Phase 1 Checkpoint Mock Exam (Review & Mock • Hard)",
      "dsaProblem": {
        "id": "dsa-10",
        "title": "Phase 1 Checkpoint Mock Exam",
        "category": "Review & Mock",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-2",
        "title": "Comprehensive BigQuery UNNEST Assessment"
      },
      "techTopic": "SCD Types 4 & 6 (Mini-Dimensions & Hybrid)",
      "defenseTopic": "Full 1-Page Google ATS Resume Live Review",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 26,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 4,
      "title": "Day 26: LC 207 - Course Schedule I (Cycle Detection)",
      "pillar": "dsa",
      "focus": "LC 207 - Course Schedule I (Cycle Detection) (Graphs & DAGs • Medium)",
      "dsaProblem": {
        "id": "dsa-25",
        "title": "LC 207 - Course Schedule I (Cycle Detection)",
        "category": "Graphs & DAGs",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/course-schedule/"
      },
      "sqlChallenge": {
        "id": "sql-10",
        "title": "Graph Cycle Detection in SQL"
      },
      "techTopic": "Apache Airflow: DAG Scheduling & Operators",
      "defenseTopic": "Orchestrating Complex Multi-Stage Pipelines",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/course-schedule/"
    },
    {
      "day": 27,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 4,
      "title": "Day 27: LC 210 - Course Schedule II (DAG Order)",
      "pillar": "dsa",
      "focus": "LC 210 - Course Schedule II (DAG Order) (Graphs & DAGs • Medium)",
      "dsaProblem": {
        "id": "dsa-26",
        "title": "LC 210 - Course Schedule II (DAG Order)",
        "category": "Graphs & DAGs",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/course-schedule-ii/"
      },
      "sqlChallenge": {
        "id": "sql-10",
        "title": "Topological Sort with Recursive CTEs"
      },
      "techTopic": "Apache Beam: Pipeline DAG Execution Graph",
      "defenseTopic": "Airflow Task Failure Backfill Strategy",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/course-schedule-ii/"
    },
    {
      "day": 28,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 4,
      "title": "Day 28: LC 200 - Number of Islands",
      "pillar": "dsa",
      "focus": "LC 200 - Number of Islands (Graphs & DAGs • Medium)",
      "dsaProblem": {
        "id": "dsa-27",
        "title": "LC 200 - Number of Islands",
        "category": "Graphs & DAGs",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/number-of-islands/"
      },
      "sqlChallenge": {
        "id": "sql-4",
        "title": "Connected Component Labeling in SQL"
      },
      "techTopic": "Spark RDD Lineage Graph vs DataFrame Catalyst",
      "defenseTopic": "Catalyst Optimizer Physical Plan Analysis",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/number-of-islands/"
    },
    {
      "day": 29,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 5,
      "title": "Day 29: LC 133 - Clone Graph",
      "pillar": "dsa",
      "focus": "LC 133 - Clone Graph (Graphs & DAGs • Medium)",
      "dsaProblem": {
        "id": "dsa-27",
        "title": "LC 133 - Clone Graph",
        "category": "Graphs & DAGs",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/clone-graph/"
      },
      "sqlChallenge": {
        "id": "sql-10",
        "title": "Adjacency List to Edge Matrix Transformation"
      },
      "techTopic": "Spark Tungsten Engine: Off-Heap Memory & CodeGen",
      "defenseTopic": "Spark Garbage Collection & Memory Tuning",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/clone-graph/"
    },
    {
      "day": 30,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 5,
      "title": "Day 30: LC 269 - Alien Dictionary",
      "pillar": "dsa",
      "focus": "LC 269 - Alien Dictionary (Graphs & DAGs • Hard)",
      "dsaProblem": {
        "id": "dsa-26",
        "title": "LC 269 - Alien Dictionary",
        "category": "Graphs & DAGs",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problems/alien-dictionary/"
      },
      "sqlChallenge": {
        "id": "sql-10",
        "title": "Lexicographical Character Ordering in SQL"
      },
      "techTopic": "Delta Lake: ACID Transaction Log (_delta_log)",
      "defenseTopic": "Databricks Delta Engine & Parquet Compaction",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/alien-dictionary/"
    },
    {
      "day": 31,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 5,
      "title": "Day 31: LC 56 - Merge Intervals",
      "pillar": "dsa",
      "focus": "LC 56 - Merge Intervals (Intervals • Medium)",
      "dsaProblem": {
        "id": "dsa-21",
        "title": "LC 56 - Merge Intervals",
        "category": "Intervals",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/merge-intervals/"
      },
      "sqlChallenge": {
        "id": "sql-1",
        "title": "Interval Overlap & Concurrency in SQL"
      },
      "techTopic": "Apache Iceberg Metadata Architecture vs Delta Lake",
      "defenseTopic": "Open Table Formats Comparison in Cloud Lakes",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/merge-intervals/"
    },
    {
      "day": 32,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 5,
      "title": "Day 32: LC 57 - Insert Interval",
      "pillar": "dsa",
      "focus": "LC 57 - Insert Interval (Intervals • Medium)",
      "dsaProblem": {
        "id": "dsa-22",
        "title": "LC 57 - Insert Interval",
        "category": "Intervals",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/insert-interval/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "Continuous Time Slot Booking in SQL"
      },
      "techTopic": "CDC Architecture: Debezium WAL to Pub/Sub",
      "defenseTopic": "Debezium Postgres WAL Parsing Mechanics",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/insert-interval/"
    },
    {
      "day": 33,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 5,
      "title": "Day 33: LC 435 - Non-overlapping Intervals",
      "pillar": "dsa",
      "focus": "LC 435 - Non-overlapping Intervals (Intervals • Medium)",
      "dsaProblem": {
        "id": "dsa-21",
        "title": "LC 435 - Non-overlapping Intervals",
        "category": "Intervals",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/non-overlapping-intervals/"
      },
      "sqlChallenge": {
        "id": "sql-7",
        "title": "Maximizing Non-Overlapping Pipeline Tasks"
      },
      "techTopic": "BigQuery Streaming CDC: Storage Write API Streams",
      "defenseTopic": "Ingesting High-Frequency CDC without MERGE Crash",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/non-overlapping-intervals/"
    },
    {
      "day": 34,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 5,
      "title": "Day 34: LC 253 - Meeting Rooms II",
      "pillar": "dsa",
      "focus": "LC 253 - Meeting Rooms II (Intervals & Heaps • Medium)",
      "dsaProblem": {
        "id": "dsa-23",
        "title": "LC 253 - Meeting Rooms II",
        "category": "Intervals & Heaps",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms-ii/"
      },
      "sqlChallenge": {
        "id": "sql-1",
        "title": "Peak Concurrent Resource Utilization Query"
      },
      "techTopic": "Stream Processing: Watermarks, Triggers, Windows",
      "defenseTopic": "Handling 4-Hour Late Subway Telemetry in Beam",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/meeting-rooms-ii/"
    },
    {
      "day": 35,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 5,
      "title": "Day 35: LC 347 - Top K Frequent Elements",
      "pillar": "dsa",
      "focus": "LC 347 - Top K Frequent Elements (Heaps • Medium)",
      "dsaProblem": {
        "id": "dsa-23",
        "title": "LC 347 - Top K Frequent Elements",
        "category": "Heaps",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/top-k-frequent-elements/"
      },
      "sqlChallenge": {
        "id": "sql-2",
        "title": "Top K per Category using Window Functions"
      },
      "techTopic": "Beam Windows: Fixed, Sliding, and Session Windows",
      "defenseTopic": "Beam Window State & Memory Management",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/top-k-frequent-elements/"
    },
    {
      "day": 36,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 6,
      "title": "Day 36: LC 215 - Kth Largest Element",
      "pillar": "dsa",
      "focus": "LC 215 - Kth Largest Element (Heaps • Medium)",
      "dsaProblem": {
        "id": "dsa-23",
        "title": "LC 215 - Kth Largest Element",
        "category": "Heaps",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "Approximate Percentiles with APPROX_QUANTILES"
      },
      "techTopic": "Data Skew in Streaming: Key Salting in Dataflow",
      "defenseTopic": "Dataflow Streaming Two-Stage Combiners",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/kth-largest-element-in-an-array/"
    },
    {
      "day": 37,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 6,
      "title": "Day 37: LC 295 - Find Median from Data Stream",
      "pillar": "dsa",
      "focus": "LC 295 - Find Median from Data Stream (Heaps • Hard)",
      "dsaProblem": {
        "id": "dsa-24",
        "title": "LC 295 - Find Median from Data Stream",
        "category": "Heaps",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problems/find-median-from-data-stream/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "Continuous Percentile Aggregation (P50/P90/P99)"
      },
      "techTopic": "Exactly-Once Processing: End-to-End Idempotency",
      "defenseTopic": "Pub/Sub + Dataflow + BigQuery Exactly-Once",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/find-median-from-data-stream/"
    },
    {
      "day": 38,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 6,
      "title": "Day 38: LC 23 - Merge K Sorted Lists",
      "pillar": "dsa",
      "focus": "LC 23 - Merge K Sorted Lists (Heaps • Hard)",
      "dsaProblem": {
        "id": "dsa-23",
        "title": "LC 23 - Merge K Sorted Lists",
        "category": "Heaps",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problems/merge-k-sorted-lists/"
      },
      "sqlChallenge": {
        "id": "sql-7",
        "title": "Multi-Source Sorted Time-Series Merge in SQL"
      },
      "techTopic": "Distributed Cache: Redis / Memcached in Pipelines",
      "defenseTopic": "Caching Layer Invalidation Strategies",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/merge-k-sorted-lists/"
    },
    {
      "day": 39,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 6,
      "title": "Day 39: LC 146 - LRU Cache",
      "pillar": "dsa",
      "focus": "LC 146 - LRU Cache (Design & Data Structures • Medium)",
      "dsaProblem": {
        "id": "dsa-20",
        "title": "LC 146 - LRU Cache",
        "category": "Design & Data Structures",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/lru-cache/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "Cache Hit Ratio & Eviction Simulation in SQL"
      },
      "techTopic": "BigQuery BI Engine In-Memory Query Accelerator",
      "defenseTopic": "Sub-Second Executive Dashboard SLAs",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/lru-cache/"
    },
    {
      "day": 40,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 6,
      "title": "Day 40: LC 460 - LFU Cache",
      "pillar": "dsa",
      "focus": "LC 460 - LFU Cache (Design & Data Structures • Hard)",
      "dsaProblem": {
        "id": "dsa-20",
        "title": "LC 460 - LFU Cache",
        "category": "Design & Data Structures",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problems/lfu-cache/"
      },
      "sqlChallenge": {
        "id": "sql-9",
        "title": "Frequency Tiering & Hot/Cold Storage Lifecycle"
      },
      "techTopic": "GCS Storage Classes: Standard, Nearline, Archive",
      "defenseTopic": "Cloud Storage Tiering Cost Optimization",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/lfu-cache/"
    },
    {
      "day": 41,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 6,
      "title": "Day 41: LC 226 - Invert Binary Tree",
      "pillar": "dsa",
      "focus": "LC 226 - Invert Binary Tree (Trees • Easy)",
      "dsaProblem": {
        "id": "dsa-12",
        "title": "LC 226 - Invert Binary Tree",
        "category": "Trees",
        "difficulty": "Easy",
        "leetcodeUrl": "https://leetcode.com/problems/invert-binary-tree/"
      },
      "sqlChallenge": {
        "id": "sql-10",
        "title": "Tree Depth & Node Count Aggregation in SQL"
      },
      "techTopic": "Database Indexing: B-Tree, Bitmap, Hash, LSM",
      "defenseTopic": "Why Modern Cloud DWs Replaced B-Trees",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/invert-binary-tree/"
    },
    {
      "day": 42,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 6,
      "title": "Day 42: LC 104 - Maximum Depth of Binary Tree",
      "pillar": "dsa",
      "focus": "LC 104 - Maximum Depth of Binary Tree (Trees • Easy)",
      "dsaProblem": {
        "id": "dsa-12",
        "title": "LC 104 - Maximum Depth of Binary Tree",
        "category": "Trees",
        "difficulty": "Easy",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
      },
      "sqlChallenge": {
        "id": "sql-10",
        "title": "Maximum Hierarchy Depth in Recursive SQL"
      },
      "techTopic": "Columnar Formats: Parquet vs ORC vs Capacitor",
      "defenseTopic": "Micro-Partition Column Stride Pruning",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
    },
    {
      "day": 43,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 7,
      "title": "Day 43: LC 102 - Binary Tree Level Order Traversal",
      "pillar": "dsa",
      "focus": "LC 102 - Binary Tree Level Order Traversal (Trees • Medium)",
      "dsaProblem": {
        "id": "dsa-27",
        "title": "LC 102 - Binary Tree Level Order Traversal",
        "category": "Trees",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
      },
      "sqlChallenge": {
        "id": "sql-2",
        "title": "Level-by-Level Rollup with GROUPING SETS"
      },
      "techTopic": "Data Warehousing: Fact Constellation Schema",
      "defenseTopic": "Enterprise Lakehouse Dimensional Design",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
    },
    {
      "day": 44,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 7,
      "title": "Day 44: LC 98 - Validate Binary Search Tree",
      "pillar": "dsa",
      "focus": "LC 98 - Validate Binary Search Tree (Trees • Medium)",
      "dsaProblem": {
        "id": "dsa-15",
        "title": "LC 98 - Validate Binary Search Tree",
        "category": "Trees",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/validate-binary-search-tree/"
      },
      "sqlChallenge": {
        "id": "sql-3",
        "title": "Validating Relational Integrity Constraints"
      },
      "techTopic": "Concurrency Control: MVCC in Cloud SQL / Postgres",
      "defenseTopic": "Transaction Isolation Levels (Read Committed)",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/validate-binary-search-tree/"
    },
    {
      "day": 45,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 7,
      "title": "Day 45: LC 236 - Lowest Common Ancestor",
      "pillar": "dsa",
      "focus": "LC 236 - Lowest Common Ancestor (Trees • Medium)",
      "dsaProblem": {
        "id": "dsa-26",
        "title": "LC 236 - Lowest Common Ancestor",
        "category": "Trees",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
      },
      "sqlChallenge": {
        "id": "sql-10",
        "title": "Common Ancestor Lineage Query in SQL"
      },
      "techTopic": "Distributed Consensus: Raft vs Paxos (Spanner)",
      "defenseTopic": "How Spanner Achieves High Availability",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
    },
    {
      "day": 46,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 7,
      "title": "Day 46: LC 208 - Implement Trie",
      "pillar": "dsa",
      "focus": "LC 208 - Implement Trie (Tries • Medium)",
      "dsaProblem": {
        "id": "dsa-3",
        "title": "LC 208 - Implement Trie",
        "category": "Tries",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/implement-trie-prefix-tree/"
      },
      "sqlChallenge": {
        "id": "sql-2",
        "title": "Prefix Autocomplete Query Optimization"
      },
      "techTopic": "Data Catalog & Governance: Google Dataplex",
      "defenseTopic": "Metadata-Driven Schema Governance",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/implement-trie-prefix-tree/"
    },
    {
      "day": 47,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 7,
      "title": "Day 47: LC 70 - Climbing Stairs",
      "pillar": "dsa",
      "focus": "LC 70 - Climbing Stairs (Dynamic Programming • Easy)",
      "dsaProblem": {
        "id": "dsa-28",
        "title": "LC 70 - Climbing Stairs",
        "category": "Dynamic Programming",
        "difficulty": "Easy",
        "leetcodeUrl": "https://leetcode.com/problems/climbing-stairs/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "Fibonacci & Iterative Accumulation in SQL"
      },
      "techTopic": "Data Quality Frameworks: Great Expectations & dbt",
      "defenseTopic": "Automated Pipeline Quality Guardrails",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/climbing-stairs/"
    },
    {
      "day": 48,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 7,
      "title": "Day 48: LC 322 - Coin Change",
      "pillar": "dsa",
      "focus": "LC 322 - Coin Change (Dynamic Programming • Medium)",
      "dsaProblem": {
        "id": "dsa-28",
        "title": "LC 322 - Coin Change",
        "category": "Dynamic Programming",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/coin-change/"
      },
      "sqlChallenge": {
        "id": "sql-9",
        "title": "Currency Denomination Optimization in SQL"
      },
      "techTopic": "Data Observability: SLAs & Dead-Letter Queues",
      "defenseTopic": "Pipeline Alerting & MTTR Slashing",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/coin-change/"
    },
    {
      "day": 49,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 7,
      "title": "Day 49: LC 300 - Longest Increasing Subsequence",
      "pillar": "dsa",
      "focus": "LC 300 - Longest Increasing Subsequence (Dynamic Programming • Medium)",
      "dsaProblem": {
        "id": "dsa-28",
        "title": "LC 300 - Longest Increasing Subsequence",
        "category": "Dynamic Programming",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/longest-increasing-subsequence/"
      },
      "sqlChallenge": {
        "id": "sql-4",
        "title": "Longest Consecutive Up-trend in Sales"
      },
      "techTopic": "Data Lineage & Impact Analysis in Lakehouses",
      "defenseTopic": "Automated Upstream/Downstream Lineage",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/longest-increasing-subsequence/"
    },
    {
      "day": 50,
      "phase": 2,
      "phaseName": "Phase 2: Advanced Big Data Structures & SQL Mastery",
      "week": 8,
      "title": "Day 50: Phase 2 Checkpoint Mock: LC 210 + LC 295",
      "pillar": "dsa",
      "focus": "Phase 2 Checkpoint Mock: LC 210 + LC 295 (Review & Mock • Hard)",
      "dsaProblem": {
        "id": "dsa-26",
        "title": "Phase 2 Checkpoint Mock: LC 210 + LC 295",
        "category": "Review & Mock",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problems/course-schedule-ii/"
      },
      "sqlChallenge": {
        "id": "sql-1",
        "title": "Advanced Sessionization & CDC Merge Assessment"
      },
      "techTopic": "Phase 2 Review: Apache Spark + Snowflake",
      "defenseTopic": "Full Architectural Defense Rehearsal",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/course-schedule-ii/"
    },
    {
      "day": 51,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 8,
      "title": "Day 51: LC 78 - Subsets",
      "pillar": "dsa",
      "focus": "LC 78 - Subsets (Backtracking • Medium)",
      "dsaProblem": {
        "id": "dsa-3",
        "title": "LC 78 - Subsets",
        "category": "Backtracking",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/subsets/"
      },
      "sqlChallenge": {
        "id": "sql-2",
        "title": "Set Combinations & Cartesian Products"
      },
      "techTopic": "Design 1: Real-Time Clickstream Ingestion (100k/s)",
      "defenseTopic": "Sizing Pub/Sub, Dataflow, and BigQuery",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/subsets/"
    },
    {
      "day": 52,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 8,
      "title": "Day 52: LC 90 - Subsets II",
      "pillar": "dsa",
      "focus": "LC 90 - Subsets II (Backtracking • Medium)",
      "dsaProblem": {
        "id": "dsa-3",
        "title": "LC 90 - Subsets II",
        "category": "Backtracking",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/subsets-ii/"
      },
      "sqlChallenge": {
        "id": "sql-7",
        "title": "Deduplicating Combinations in SQL"
      },
      "techTopic": "Design 1: Storage Layer (Bigtable vs BigQuery)",
      "defenseTopic": "Storage Cost vs Latency Trade-offs",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/subsets-ii/"
    },
    {
      "day": 53,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 8,
      "title": "Day 53: LC 39 - Combination Sum",
      "pillar": "dsa",
      "focus": "LC 39 - Combination Sum (Backtracking • Medium)",
      "dsaProblem": {
        "id": "dsa-28",
        "title": "LC 39 - Combination Sum",
        "category": "Backtracking",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/combination-sum/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "Target Sum Rebalancing in SQL"
      },
      "techTopic": "Design 1: Latency & Failure Modes",
      "defenseTopic": "Network Partitioning & Backpressure",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/combination-sum/"
    },
    {
      "day": 54,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 8,
      "title": "Day 54: LC 46 - Permutations",
      "pillar": "dsa",
      "focus": "LC 46 - Permutations (Backtracking • Medium)",
      "dsaProblem": {
        "id": "dsa-3",
        "title": "LC 46 - Permutations",
        "category": "Backtracking",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/permutations/"
      },
      "sqlChallenge": {
        "id": "sql-10",
        "title": "Permutations of Workflow Stages in SQL"
      },
      "techTopic": "Design 2: Global Financial Transaction Ledger",
      "defenseTopic": "Idempotent Upserts in Cloud Spanner",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/permutations/"
    },
    {
      "day": 55,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 8,
      "title": "Day 55: LC 79 - Word Search",
      "pillar": "dsa",
      "focus": "LC 79 - Word Search (Backtracking • Medium)",
      "dsaProblem": {
        "id": "dsa-27",
        "title": "LC 79 - Word Search",
        "category": "Backtracking",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/word-search/"
      },
      "sqlChallenge": {
        "id": "sql-10",
        "title": "2D Spatial Grid Routing Query"
      },
      "techTopic": "Design 2: Multi-Region Active-Active Replication",
      "defenseTopic": "Two-Phase Commit vs Paxos Consensus",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/word-search/"
    },
    {
      "day": 56,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 8,
      "title": "Day 56: LC 139 - Word Break",
      "pillar": "dsa",
      "focus": "LC 139 - Word Break (Dynamic Programming • Medium)",
      "dsaProblem": {
        "id": "dsa-28",
        "title": "LC 139 - Word Break",
        "category": "Dynamic Programming",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/word-break/"
      },
      "sqlChallenge": {
        "id": "sql-2",
        "title": "String Tokenization & Parsing in SQL"
      },
      "techTopic": "Design 2: Financial Reconciliation & Double-Entry",
      "defenseTopic": "Daily Balance Reconciliation Pipelines",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/word-break/"
    },
    {
      "day": 57,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 9,
      "title": "Day 57: LC 198 - House Robber",
      "pillar": "dsa",
      "focus": "LC 198 - House Robber (Dynamic Programming • Medium)",
      "dsaProblem": {
        "id": "dsa-28",
        "title": "LC 198 - House Robber",
        "category": "Dynamic Programming",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/house-robber/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "Non-Adjacent Resource Maximization"
      },
      "techTopic": "Design 3: YouTube Real-Time View Count",
      "defenseTopic": "Key Salting & Two-Stage Aggregation",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/house-robber/"
    },
    {
      "day": 58,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 9,
      "title": "Day 58: LC 213 - House Robber II",
      "pillar": "dsa",
      "focus": "LC 213 - House Robber II (Dynamic Programming • Medium)",
      "dsaProblem": {
        "id": "dsa-28",
        "title": "LC 213 - House Robber II",
        "category": "Dynamic Programming",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/house-robber-ii/"
      },
      "sqlChallenge": {
        "id": "sql-1",
        "title": "Circular Interval Scheduling Query"
      },
      "techTopic": "Design 3: Handling 40M Viewers (Ronaldo Live)",
      "defenseTopic": "Defending Bigtable Write Hotspotting",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/house-robber-ii/"
    },
    {
      "day": 59,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 9,
      "title": "Day 59: LC 62 - Unique Paths",
      "pillar": "dsa",
      "focus": "LC 62 - Unique Paths (Dynamic Programming • Medium)",
      "dsaProblem": {
        "id": "dsa-28",
        "title": "LC 62 - Unique Paths",
        "category": "Dynamic Programming",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/unique-paths/"
      },
      "sqlChallenge": {
        "id": "sql-10",
        "title": "Matrix Grid Path Traversal in SQL"
      },
      "techTopic": "Design 3: Lambda vs Kappa for Trending Videos",
      "defenseTopic": "Real-Time Stream vs Nightly Batch Reconcile",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/unique-paths/"
    },
    {
      "day": 60,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 9,
      "title": "Day 60: LC 1143 - Longest Common Subsequence",
      "pillar": "dsa",
      "focus": "LC 1143 - Longest Common Subsequence (Dynamic Programming • Medium)",
      "dsaProblem": {
        "id": "dsa-28",
        "title": "LC 1143 - Longest Common Subsequence",
        "category": "Dynamic Programming",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/longest-common-subsequence/"
      },
      "sqlChallenge": {
        "id": "sql-5",
        "title": "String Diff & Version Comparison in SQL"
      },
      "techTopic": "Design 4: Enterprise IoT Sensor Telemetry",
      "defenseTopic": "Time-Series Partitioning in Bigtable",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/longest-common-subsequence/"
    },
    {
      "day": 61,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 9,
      "title": "Day 61: LC 72 - Edit Distance",
      "pillar": "dsa",
      "focus": "LC 72 - Edit Distance (Dynamic Programming • Hard)",
      "dsaProblem": {
        "id": "dsa-28",
        "title": "LC 72 - Edit Distance",
        "category": "Dynamic Programming",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problems/edit-distance/"
      },
      "sqlChallenge": {
        "id": "sql-5",
        "title": "Levenshtein Distance & Fuzzy Join in SQL"
      },
      "techTopic": "Design 4: Edge Gateways & Out-of-Order Sensors",
      "defenseTopic": "Allowed Lateness vs Side-Outputs",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/edit-distance/"
    },
    {
      "day": 62,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 9,
      "title": "Day 62: LC 53 - Maximum Subarray",
      "pillar": "dsa",
      "focus": "LC 53 - Maximum Subarray (Dynamic Programming • Medium)",
      "dsaProblem": {
        "id": "dsa-5",
        "title": "LC 53 - Maximum Subarray",
        "category": "Dynamic Programming",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-subarray/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "Peak Profit Rolling Window Query"
      },
      "techTopic": "Design 4: Downsampling & Tiered Storage",
      "defenseTopic": "Compacting 1-sec Telemetry to 1-min Averages",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/maximum-subarray/"
    },
    {
      "day": 63,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 9,
      "title": "Day 63: LC 152 - Maximum Product Subarray",
      "pillar": "dsa",
      "focus": "LC 152 - Maximum Product Subarray (Dynamic Programming • Medium)",
      "dsaProblem": {
        "id": "dsa-4",
        "title": "LC 152 - Maximum Product Subarray",
        "category": "Dynamic Programming",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/maximum-product-subarray/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "Volatility & Rolling Variance Query"
      },
      "techTopic": "Design 5: Uber/Lyft Real-Time Ride Matching",
      "defenseTopic": "Geo-Hashing & S2 Geometry in Big Data",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/maximum-product-subarray/"
    },
    {
      "day": 64,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 10,
      "title": "Day 64: LC 42 - Trapping Rain Water",
      "pillar": "dsa",
      "focus": "LC 42 - Trapping Rain Water (Two Pointers / Stack • Hard)",
      "dsaProblem": {
        "id": "dsa-8",
        "title": "LC 42 - Trapping Rain Water",
        "category": "Two Pointers / Stack",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "Volume Calculation Between Elevation Peaks"
      },
      "techTopic": "Design 5: Driver Location Tracking & TTL",
      "defenseTopic": "Cloud MemoryStore / Redis Geo-Spatial Index",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/trapping-rain-water/"
    },
    {
      "day": 65,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 10,
      "title": "Day 65: LC 73 - Set Matrix Zeroes",
      "pillar": "dsa",
      "focus": "LC 73 - Set Matrix Zeroes (Arrays • Medium)",
      "dsaProblem": {
        "id": "dsa-1",
        "title": "LC 73 - Set Matrix Zeroes",
        "category": "Arrays",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/set-matrix-zeroes/"
      },
      "sqlChallenge": {
        "id": "sql-2",
        "title": "Matrix Transformation in SQL"
      },
      "techTopic": "Design 5: High-Throughput Matching Engine",
      "defenseTopic": "Kafka / Pub/Sub Event Sourcing Architecture",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/set-matrix-zeroes/"
    },
    {
      "day": 66,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 10,
      "title": "Day 66: LC 54 - Spiral Matrix",
      "pillar": "dsa",
      "focus": "LC 54 - Spiral Matrix (Arrays • Medium)",
      "dsaProblem": {
        "id": "dsa-1",
        "title": "LC 54 - Spiral Matrix",
        "category": "Arrays",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/spiral-matrix/"
      },
      "sqlChallenge": {
        "id": "sql-10",
        "title": "Spiral Coordinate Traversal in SQL"
      },
      "techTopic": "Design 6: Google Search Analytics Data Platform",
      "defenseTopic": "BigQuery Dremel Serving Trees & Colossus",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/spiral-matrix/"
    },
    {
      "day": 67,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 10,
      "title": "Day 67: LC 48 - Rotate Image",
      "pillar": "dsa",
      "focus": "LC 48 - Rotate Image (Arrays • Medium)",
      "dsaProblem": {
        "id": "dsa-1",
        "title": "LC 48 - Rotate Image",
        "category": "Arrays",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/rotate-image/"
      },
      "sqlChallenge": {
        "id": "sql-2",
        "title": "Transposing Tables without UNPIVOT"
      },
      "techTopic": "Design 6: Privacy Governance & Differential Privacy",
      "defenseTopic": "PII Masking & Column-Level Security",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/rotate-image/"
    },
    {
      "day": 68,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 10,
      "title": "Day 68: LC 41 - First Missing Positive",
      "pillar": "dsa",
      "focus": "LC 41 - First Missing Positive (Arrays • Hard)",
      "dsaProblem": {
        "id": "dsa-1",
        "title": "LC 41 - First Missing Positive",
        "category": "Arrays",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problems/first-missing-positive/"
      },
      "sqlChallenge": {
        "id": "sql-9",
        "title": "Finding Sequence Holes in Distributed Logs"
      },
      "techTopic": "Design 6: Multi-Tenant Data Mesh & Data Products",
      "defenseTopic": "Dataplex Data Governance & Security",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/first-missing-positive/"
    },
    {
      "day": 69,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 10,
      "title": "Day 69: LC 287 - Find the Duplicate Number",
      "pillar": "dsa",
      "focus": "LC 287 - Find the Duplicate Number (Two Pointers • Medium)",
      "dsaProblem": {
        "id": "dsa-18",
        "title": "LC 287 - Find the Duplicate Number",
        "category": "Two Pointers",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/find-the-duplicate-number/"
      },
      "sqlChallenge": {
        "id": "sql-7",
        "title": "Identifying Multi-Attribute Duplicates"
      },
      "techTopic": "Design 7: Real-Time Feature Store for ML",
      "defenseTopic": "Feast / Vertex AI Feature Store Architecture",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/find-the-duplicate-number/"
    },
    {
      "day": 70,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 10,
      "title": "Day 70: LC 380 - Insert Delete GetRandom O(1)",
      "pillar": "dsa",
      "focus": "LC 380 - Insert Delete GetRandom O(1) (Design • Medium)",
      "dsaProblem": {
        "id": "dsa-1",
        "title": "LC 380 - Insert Delete GetRandom O(1)",
        "category": "Design",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/insert-delete-getrandom-o1/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "Uniform Random Sampling without Full Scan"
      },
      "techTopic": "Design 7: Training vs Serving Skew & Online Latency",
      "defenseTopic": "Real-Time Feature Ingestion Pipeline",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/insert-delete-getrandom-o1/"
    },
    {
      "day": 71,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 11,
      "title": "Day 71: LC 128 - Longest Consecutive Sequence",
      "pillar": "dsa",
      "focus": "LC 128 - Longest Consecutive Sequence (Arrays & Hashing • Medium)",
      "dsaProblem": {
        "id": "dsa-1",
        "title": "LC 128 - Longest Consecutive Sequence",
        "category": "Arrays & Hashing",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/longest-consecutive-sequence/"
      },
      "sqlChallenge": {
        "id": "sql-4",
        "title": "Island Length Aggregation in Gaps & Islands"
      },
      "techTopic": "Design 7: Vector Databases & Embeddings at Scale",
      "defenseTopic": "Vertex AI Vector Search / ScaNN",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/longest-consecutive-sequence/"
    },
    {
      "day": 72,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 11,
      "title": "Day 72: LC 994 - Rotting Oranges",
      "pillar": "dsa",
      "focus": "LC 994 - Rotting Oranges (Graphs & DAGs • Medium)",
      "dsaProblem": {
        "id": "dsa-27",
        "title": "LC 994 - Rotting Oranges",
        "category": "Graphs & DAGs",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problems/rotting-oranges/"
      },
      "sqlChallenge": {
        "id": "sql-10",
        "title": "Epidemic Spread / Propagation Query"
      },
      "techTopic": "Design 8: Cloud Modernization: Teradata to BigQuery",
      "defenseTopic": "Dual-Run Verification & Cutover Framework",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/rotting-oranges/"
    },
    {
      "day": 73,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 11,
      "title": "Day 73: LC 212 - Word Search II",
      "pillar": "dsa",
      "focus": "LC 212 - Word Search II (Tries & Backtracking • Hard)",
      "dsaProblem": {
        "id": "dsa-3",
        "title": "LC 212 - Word Search II",
        "category": "Tries & Backtracking",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problems/word-search-ii/"
      },
      "sqlChallenge": {
        "id": "sql-2",
        "title": "Full-Text Multi-Keyword Matching in SQL"
      },
      "techTopic": "Design 8: Shadow Testing & Automated Query Hash",
      "defenseTopic": "Shadow-Testing Framework Architecture",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/word-search-ii/"
    },
    {
      "day": 74,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 11,
      "title": "Day 74: LC 84 - Largest Rectangle (Review)",
      "pillar": "dsa",
      "focus": "LC 84 - Largest Rectangle (Review) (Monotonic Stack • Hard)",
      "dsaProblem": {
        "id": "dsa-14",
        "title": "LC 84 - Largest Rectangle (Review)",
        "category": "Monotonic Stack",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/"
      },
      "sqlChallenge": {
        "id": "sql-7",
        "title": "Area Optimization under Histogram Curve"
      },
      "techTopic": "Design 8: Zero-Downtime Data Cutover Strategies",
      "defenseTopic": "Strangler Fig Pattern for Cloud Lakehouses",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problems/largest-rectangle-in-histogram/"
    },
    {
      "day": 75,
      "phase": 3,
      "phaseName": "Phase 3: Large-Scale Distributed Data System Design",
      "week": 11,
      "title": "Day 75: Phase 3 Checkpoint: Full System Design Mock",
      "pillar": "dsa",
      "focus": "Phase 3 Checkpoint: Full System Design Mock (Review & Mock • Hard)",
      "dsaProblem": {
        "id": "dsa-26",
        "title": "Phase 3 Checkpoint: Full System Design Mock",
        "category": "Review & Mock",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-1",
        "title": "Complete Multi-Role Architecture Loop"
      },
      "techTopic": "Phase 3 Review: All 8 System Design Archetypes",
      "defenseTopic": "Siemens & Coca-Cola Production Defense Deep Dive",
      "estMinutes": 180,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 76,
      "phase": 4,
      "phaseName": "Phase 4: Google L4/L5 Grilling, Full Mocks & ATS Defense",
      "week": 11,
      "title": "Day 76: Rapid Drill 1: Two Pointers & Window",
      "pillar": "dsa",
      "focus": "Rapid Drill 1: Two Pointers & Window (Speed Drills • Medium)",
      "dsaProblem": {
        "id": "dsa-7",
        "title": "Rapid Drill 1: Two Pointers & Window",
        "category": "Speed Drills",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-7",
        "title": "BigQuery QUALIFY & UNNEST under 15 mins"
      },
      "techTopic": "Google L5 Trap 1: Bigtable Viral Hotspotting",
      "defenseTopic": "Defend Siemens 40k Object Migration AST Parser",
      "estMinutes": 240,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 77,
      "phase": 4,
      "phaseName": "Phase 4: Google L4/L5 Grilling, Full Mocks & ATS Defense",
      "week": 11,
      "title": "Day 77: Rapid Drill 2: Stack & Binary Search",
      "pillar": "dsa",
      "focus": "Rapid Drill 2: Stack & Binary Search (Speed Drills • Medium)",
      "dsaProblem": {
        "id": "dsa-14",
        "title": "Rapid Drill 2: Stack & Binary Search",
        "category": "Speed Drills",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-1",
        "title": "Advanced Sessionization under 15 mins"
      },
      "techTopic": "Google L5 Trap 2: Watermark Memory Explosion",
      "defenseTopic": "Defend Databricks 32% Compute Cost Reduction",
      "estMinutes": 240,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 78,
      "phase": 4,
      "phaseName": "Phase 4: Google L4/L5 Grilling, Full Mocks & ATS Defense",
      "week": 12,
      "title": "Day 78: Rapid Drill 3: Graphs & DAGs",
      "pillar": "dsa",
      "focus": "Rapid Drill 3: Graphs & DAGs (Speed Drills • Medium)",
      "dsaProblem": {
        "id": "dsa-26",
        "title": "Rapid Drill 3: Graphs & DAGs",
        "category": "Speed Drills",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-3",
        "title": "SCD Type 2 Point-in-Time Join under 15 mins"
      },
      "techTopic": "Google L5 Trap 3: BigQuery MERGE Quota Exhaustion",
      "defenseTopic": "Defend PySpark Adaptive Query Execution (AQE)",
      "estMinutes": 240,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 79,
      "phase": 4,
      "phaseName": "Phase 4: Google L4/L5 Grilling, Full Mocks & ATS Defense",
      "week": 12,
      "title": "Day 79: Rapid Drill 4: Heaps & Priority Queues",
      "pillar": "dsa",
      "focus": "Rapid Drill 4: Heaps & Priority Queues (Speed Drills • Medium)",
      "dsaProblem": {
        "id": "dsa-23",
        "title": "Rapid Drill 4: Heaps & Priority Queues",
        "category": "Speed Drills",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-8",
        "title": "Multi-Channel Attribution under 15 mins"
      },
      "techTopic": "Google L5 Trap 4: Spanner Monotonic Timestamp",
      "defenseTopic": "Defend PySpark Key Salting Join Implementation",
      "estMinutes": 240,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 80,
      "phase": 4,
      "phaseName": "Phase 4: Google L4/L5 Grilling, Full Mocks & ATS Defense",
      "week": 12,
      "title": "Day 80: Rapid Drill 5: Dynamic Programming",
      "pillar": "dsa",
      "focus": "Rapid Drill 5: Dynamic Programming (Speed Drills • Medium)",
      "dsaProblem": {
        "id": "dsa-28",
        "title": "Rapid Drill 5: Dynamic Programming",
        "category": "Speed Drills",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-5",
        "title": "Cohort Retention Analysis under 15 mins"
      },
      "techTopic": "Google L5 Trap 5: BigQuery Slot Contention & Spill",
      "defenseTopic": "Defend Snowflake 88% Query Latency Optimization",
      "estMinutes": 240,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 81,
      "phase": 4,
      "phaseName": "Phase 4: Google L4/L5 Grilling, Full Mocks & ATS Defense",
      "week": 12,
      "title": "Day 81: Rapid Drill 6: Trees & Graph BFS",
      "pillar": "dsa",
      "focus": "Rapid Drill 6: Trees & Graph BFS (Speed Drills • Medium)",
      "dsaProblem": {
        "id": "dsa-27",
        "title": "Rapid Drill 6: Trees & Graph BFS",
        "category": "Speed Drills",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-9",
        "title": "Missing Sequential IDs under 15 mins"
      },
      "techTopic": "Google L5 Trap 6: Exactly-Once Guarantees",
      "defenseTopic": "Defend Snowflake Micro-Partition Pruning",
      "estMinutes": 240,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 82,
      "phase": 4,
      "phaseName": "Phase 4: Google L4/L5 Grilling, Full Mocks & ATS Defense",
      "week": 12,
      "title": "Day 82: Google Coding Simulation 1",
      "pillar": "dsa",
      "focus": "Google Coding Simulation 1 (Google Simulation • Hard)",
      "dsaProblem": {
        "id": "dsa-10",
        "title": "Google Coding Simulation 1",
        "category": "Google Simulation",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-1",
        "title": "Live Timed SQL Assessment (2 Hard Questions)"
      },
      "techTopic": "Googliness 1: Navigating Ambiguity & Tech Debt",
      "defenseTopic": "Defend Coca-Cola 40+ ADF Parameterized Pipelines",
      "estMinutes": 240,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 83,
      "phase": 4,
      "phaseName": "Phase 4: Google L4/L5 Grilling, Full Mocks & ATS Defense",
      "week": 12,
      "title": "Day 83: Google Coding Simulation 2",
      "pillar": "dsa",
      "focus": "Google Coding Simulation 2 (Google Simulation • Hard)",
      "dsaProblem": {
        "id": "dsa-24",
        "title": "Google Coding Simulation 2",
        "category": "Google Simulation",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-4",
        "title": "Live Timed SQL Assessment (2 Hard Questions)"
      },
      "techTopic": "Googliness 2: Disagreement with Senior Tech Leads",
      "defenseTopic": "Defend Coca-Cola ADLS Gen2 Hierarchical Security",
      "estMinutes": 240,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 84,
      "phase": 4,
      "phaseName": "Phase 4: Google L4/L5 Grilling, Full Mocks & ATS Defense",
      "week": 12,
      "title": "Day 84: Google Coding Simulation 3",
      "pillar": "dsa",
      "focus": "Google Coding Simulation 3 (Google Simulation • Hard)",
      "dsaProblem": {
        "id": "dsa-26",
        "title": "Google Coding Simulation 3",
        "category": "Google Simulation",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-10",
        "title": "Live Timed SQL Assessment (2 Hard Questions)"
      },
      "techTopic": "Googliness 3: Production Outage & Post-Mortem",
      "defenseTopic": "Defend Coca-Cola MTTR Slashing (4h to 25m)",
      "estMinutes": 240,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 85,
      "phase": 4,
      "phaseName": "Phase 4: Google L4/L5 Grilling, Full Mocks & ATS Defense",
      "week": 13,
      "title": "Day 85: Google System Design Simulation 1",
      "pillar": "dsa",
      "focus": "Google System Design Simulation 1 (System Design Mock • Hard)",
      "dsaProblem": {
        "id": "dsa-23",
        "title": "Google System Design Simulation 1",
        "category": "System Design Mock",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-2",
        "title": "End-to-End Architecture Walkthrough"
      },
      "techTopic": "Googliness 4: Cross-Functional Team Influence",
      "defenseTopic": "Defend 3-Tier dbt Cloud Transformation Models",
      "estMinutes": 240,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 86,
      "phase": 4,
      "phaseName": "Phase 4: Google L4/L5 Grilling, Full Mocks & ATS Defense",
      "week": 13,
      "title": "Day 86: Google System Design Simulation 2",
      "pillar": "dsa",
      "focus": "Google System Design Simulation 2 (System Design Mock • Hard)",
      "dsaProblem": {
        "id": "dsa-20",
        "title": "Google System Design Simulation 2",
        "category": "System Design Mock",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-6",
        "title": "End-to-End Architecture Walkthrough"
      },
      "techTopic": "Googliness 5: Cost Optimization & ROI",
      "defenseTopic": "Comprehensive Technical Bar Examination",
      "estMinutes": 240,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 87,
      "phase": 4,
      "phaseName": "Phase 4: Google L4/L5 Grilling, Full Mocks & ATS Defense",
      "week": 13,
      "title": "Day 87: Google System Design Simulation 3",
      "pillar": "dsa",
      "focus": "Google System Design Simulation 3 (System Design Mock • Hard)",
      "dsaProblem": {
        "id": "dsa-28",
        "title": "Google System Design Simulation 3",
        "category": "System Design Mock",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-7",
        "title": "End-to-End Architecture Walkthrough"
      },
      "techTopic": "Recruiter Outreach: LinkedIn & Cold DMs",
      "defenseTopic": "Referral Networking Strategy for Google India",
      "estMinutes": 240,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 88,
      "phase": 4,
      "phaseName": "Phase 4: Google L4/L5 Grilling, Full Mocks & ATS Defense",
      "week": 13,
      "title": "Day 88: Full Google Interview Loop Mock (5 Rounds)",
      "pillar": "dsa",
      "focus": "Full Google Interview Loop Mock (5 Rounds) (Full Mock Loop • Hard)",
      "dsaProblem": {
        "id": "dsa-26",
        "title": "Full Google Interview Loop Mock (5 Rounds)",
        "category": "Full Mock Loop",
        "difficulty": "Hard",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-1",
        "title": "All 5 Rounds End-to-End Execution"
      },
      "techTopic": "Unconscious Competence: Rapid Fire Flashcards",
      "defenseTopic": "Live Defense of Entire 1-Page ATS Resume",
      "estMinutes": 240,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 89,
      "phase": 4,
      "phaseName": "Phase 4: Google L4/L5 Grilling, Full Mocks & ATS Defense",
      "week": 13,
      "title": "Day 89: Targeted Weakness Patching & Calibration",
      "pillar": "dsa",
      "focus": "Targeted Weakness Patching & Calibration (Review & Polish • Medium)",
      "dsaProblem": {
        "id": "dsa-7",
        "title": "Targeted Weakness Patching & Calibration",
        "category": "Review & Polish",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-3",
        "title": "Review of Problem Areas from Mock Loop"
      },
      "techTopic": "Final Mental Conditioning & Routine",
      "defenseTopic": "Compensation Negotiation Strategy (50L-1.1Cr)",
      "estMinutes": 240,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    },
    {
      "day": 90,
      "phase": 4,
      "phaseName": "Phase 4: Google L4/L5 Grilling, Full Mocks & ATS Defense",
      "week": 13,
      "title": "Day 90: Master Graduation & Readiness Certification",
      "pillar": "dsa",
      "focus": "Master Graduation & Readiness Certification (Certification • Medium)",
      "dsaProblem": {
        "id": "dsa-1",
        "title": "Master Graduation & Readiness Certification",
        "category": "Certification",
        "difficulty": "Medium",
        "leetcodeUrl": "https://leetcode.com/problemset/all/"
      },
      "sqlChallenge": {
        "id": "sql-2",
        "title": "Google India Ready Verification"
      },
      "techTopic": "Final Readiness Audit: Coding, SQL, Design",
      "defenseTopic": "Ready to Sign Google India Offer Letter",
      "estMinutes": 240,
      "leetcodeUrl": "https://leetcode.com/problemset/all/"
    }
  ],
  "sqlChallenges": [
    {
      "id": "sql-1",
      "title": "User Sessionization (30-min Inactivity Boundary Detection)",
      "category": "Window Functions & State",
      "difficulty": "Hard",
      "scenario": "Given a clickstream event table user_events(user_id, event_time, page_id), group events into sessions. A new session starts if more than 30 minutes (1800 seconds) have elapsed since the user's previous event. Assign a unique session_id per session.",
      "sampleSchema": "user_events (user_id INT, event_time TIMESTAMP, page_id STRING)",
      "solutionQuery": "WITH event_lags AS (\n  SELECT \n    user_id,\n    event_time,\n    page_id,\n    TIMESTAMP_DIFF(event_time, LAG(event_time) OVER (PARTITION BY user_id ORDER BY event_time), SECOND) AS idle_seconds\n  FROM user_events\n),\nsession_starts AS (\n  SELECT \n    user_id,\n    event_time,\n    page_id,\n    CASE \n      WHEN idle_seconds IS NULL OR idle_seconds > 1800 THEN 1 \n      ELSE 0 \n    END AS is_new_session\n  FROM event_lags\n)\nSELECT \n  user_id,\n  event_time,\n  page_id,\n  CONCAT(user_id, '_', SUM(is_new_session) OVER (PARTITION BY user_id ORDER BY event_time ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)) AS session_id\nFROM session_starts\nORDER BY user_id, event_time;",
      "explanation": "This classic two-step pattern: 1) Identify boundary triggers with LAG(), 2) Accumulate boundary triggers with a cumulative SUM() window function to create increasing session IDs."
    },
    {
      "id": "sql-2",
      "title": "BigQuery Unnesting & Repeated Struct Aggregation",
      "category": "Modern Cloud DW (BigQuery)",
      "difficulty": "Medium",
      "scenario": "In an e-commerce order table orders, each row contains an order_id and a repeated items array of STRUCTs: ARRAY<STRUCT<item_id STRING, category STRING, price NUMERIC, quantity INT64>>. Find the top 3 best-selling product categories by total revenue for each month.",
      "sampleSchema": "orders (order_id STRING, order_date DATE, items ARRAY<STRUCT<item_id STRING, category STRING, price NUMERIC, quantity INT64>>)",
      "solutionQuery": "WITH flattened_items AS (\n  SELECT \n    DATE_TRUNC(order_date, MONTH) AS order_month,\n    item.category,\n    item.price * item.quantity AS revenue\n  FROM orders,\n  UNNEST(items) AS item\n),\ncategory_revenue AS (\n  SELECT \n    order_month,\n    category,\n    SUM(revenue) AS total_revenue\n  FROM flattened_items\n  GROUP BY 1, 2\n)\nSELECT \n  order_month,\n  category,\n  total_revenue,\n  rank_num\nFROM (\n  SELECT \n    order_month,\n    category,\n    total_revenue,\n    DENSE_RANK() OVER (PARTITION BY order_month ORDER BY total_revenue DESC) AS rank_num\n  FROM category_revenue\n)\nWHERE rank_num <= 3\nORDER BY order_month DESC, rank_num ASC;",
      "explanation": "Uses BigQuery's UNNEST to flatten repeated structures without an explicit JOIN table, followed by DENSE_RANK to select top 3 categories per partition."
    },
    {
      "id": "sql-3",
      "title": "SCD Type 2 Dimension Historical State Reconstruction",
      "category": "Kimball Modeling",
      "difficulty": "Hard",
      "scenario": "Given an SCD Type 2 table dim_customer_history(customer_id, tier, effective_date, end_date, is_current) and a transactional table fact_purchases(purchase_id, customer_id, purchase_date, amount), calculate total revenue generated by each customer tier at the exact moment the purchase happened.",
      "sampleSchema": "dim_customer_history (customer_id INT, tier STRING, effective_date DATE, end_date DATE, is_current BOOL)\nfact_purchases (purchase_id INT, customer_id INT, purchase_date DATE, amount NUMERIC)",
      "solutionQuery": "SELECT \n  d.tier,\n  COUNT(f.purchase_id) AS total_transactions,\n  SUM(f.amount) AS total_revenue,\n  ROUND(AVG(f.amount), 2) AS avg_transaction_value\nFROM fact_purchases f\nJOIN dim_customer_history d\n  ON f.customer_id = d.customer_id\n  AND f.purchase_date >= d.effective_date\n  AND (f.purchase_date < d.end_date OR (d.is_current = TRUE AND d.end_date IS NULL))\nGROUP BY d.tier\nORDER BY total_revenue DESC;",
      "explanation": "Shows how to properly join facts to SCD Type 2 dimensions using point-in-time range conditions, handling currently active rows where end_date may be NULL or a sentinel date (e.g. 9999-12-31)."
    },
    {
      "id": "sql-4",
      "title": "Consecutive Active Days / Gaps & Islands (DENSE_RANK Technique)",
      "category": "Window Functions & Gaps",
      "difficulty": "Hard",
      "scenario": "Given a user daily login table user_logins(user_id, login_date), identify all streaks where a user logged in on 3 or more consecutive days. Return user_id, streak_start_date, streak_end_date, and streak_length.",
      "sampleSchema": "user_logins (user_id INT, login_date DATE)",
      "solutionQuery": "WITH distinct_logins AS (\n  SELECT DISTINCT user_id, login_date FROM user_logins\n),\nnumbered_logins AS (\n  SELECT \n    user_id,\n    login_date,\n    DENSE_RANK() OVER (PARTITION BY user_id ORDER BY login_date) AS rn\n  FROM distinct_logins\n),\ngrouped_islands AS (\n  SELECT \n    user_id,\n    login_date,\n    DATE_SUB(login_date, INTERVAL rn DAY) AS island_group\n  FROM numbered_logins\n)\nSELECT \n  user_id,\n  MIN(login_date) AS streak_start_date,\n  MAX(login_date) AS streak_end_date,\n  COUNT(*) AS streak_length\nFROM grouped_islands\nGROUP BY user_id, island_group\nHAVING COUNT(*) >= 3\nORDER BY streak_length DESC, streak_start_date ASC;",
      "explanation": "The famous date-offset island clustering trick: subtracting row_number from login_date yields a constant date (island_group) for any strictly contiguous sequence of dates!"
    },
    {
      "id": "sql-5",
      "title": "Month-over-Month User Retention Cohort Analysis",
      "category": "Analytical SQL & Reporting",
      "difficulty": "Hard",
      "scenario": "Given user_activity(user_id, activity_date), calculate monthly cohort retention: for users whose first activity was in Month M (cohort month), what percentage of those users returned in Month M+1, M+2, and M+3?",
      "sampleSchema": "user_activity (user_id INT, activity_date DATE)",
      "solutionQuery": "WITH user_first_month AS (\n  SELECT \n    user_id,\n    DATE_TRUNC(MIN(activity_date), MONTH) AS cohort_month\n  FROM user_activity\n  GROUP BY user_id\n),\nactivity_months AS (\n  SELECT DISTINCT\n    user_id,\n    DATE_TRUNC(activity_date, MONTH) AS active_month\n  FROM user_activity\n),\ncohort_sizes AS (\n  SELECT cohort_month, COUNT(user_id) AS total_cohort_users\n  FROM user_first_month\n  GROUP BY cohort_month\n),\ncohort_activity AS (\n  SELECT \n    f.cohort_month,\n    DATE_DIFF(a.active_month, f.cohort_month, MONTH) AS month_number,\n    COUNT(DISTINCT a.user_id) AS retained_users\n  FROM user_first_month f\n  JOIN activity_months a ON f.user_id = a.user_id\n  GROUP BY 1, 2\n)\nSELECT \n  c.cohort_month,\n  s.total_cohort_users,\n  c.month_number,\n  c.retained_users,\n  ROUND(100.0 * c.retained_users / s.total_cohort_users, 2) AS retention_percentage\nFROM cohort_activity c\nJOIN cohort_sizes s ON c.cohort_month = s.cohort_month\nWHERE c.month_number BETWEEN 0 AND 3\nORDER BY c.cohort_month ASC, c.month_number ASC;",
      "explanation": "Standard cohort analysis pattern: 1) Identify cohort baseline with MIN(), 2) Calculate relative month offsets with DATE_DIFF, 3) Compute ratio against cohort size."
    },
    {
      "id": "sql-6",
      "title": "Rolling 7-Day & 30-Day Moving Averages & Outlier Detection",
      "category": "Time-Series & Window Frames",
      "difficulty": "Medium",
      "scenario": "Given daily revenue telemetry daily_metrics(metric_date, revenue), calculate the rolling 7-day average revenue and flag any day where revenue exceeds 2.5x the rolling 7-day average as an ANOMALY.",
      "sampleSchema": "daily_metrics (metric_date DATE, revenue NUMERIC)",
      "solutionQuery": "WITH rolling_calculations AS (\n  SELECT \n    metric_date,\n    revenue,\n    AVG(revenue) OVER (\n      ORDER BY metric_date \n      ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\n    ) AS rolling_7d_avg,\n    COUNT(revenue) OVER (\n      ORDER BY metric_date \n      ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\n    ) AS window_days\n  FROM daily_metrics\n)\nSELECT \n  metric_date,\n  revenue,\n  ROUND(rolling_7d_avg, 2) AS rolling_7d_avg,\n  CASE \n    WHEN window_days >= 7 AND revenue > (2.5 * rolling_7d_avg) THEN 'ANOMALY_HIGH'\n    WHEN window_days >= 7 AND revenue < (0.2 * rolling_7d_avg) THEN 'ANOMALY_LOW'\n    ELSE 'NORMAL'\n  END AS anomaly_flag\nFROM rolling_calculations\nORDER BY metric_date DESC;",
      "explanation": "Demonstrates physical frame specification ROWS BETWEEN 6 PRECEDING AND CURRENT ROW, checking window count to avoid false positive alerts during cold startup."
    },
    {
      "id": "sql-7",
      "title": "Real-Time Deduplication using QUALIFY (BigQuery Storage Write Pattern)",
      "category": "BigQuery Optimization",
      "difficulty": "Medium",
      "scenario": "A streaming CDC changelog table raw_orders_cdc contains duplicate records due to Pub/Sub at-least-once delivery. Each row has order_id, status, amount, updated_at, and ingestion_id. Write an optimized BigQuery query to fetch the latest state per order without using a subquery.",
      "sampleSchema": "raw_orders_cdc (order_id STRING, status STRING, amount NUMERIC, updated_at TIMESTAMP, ingestion_id STRING)",
      "solutionQuery": "SELECT \n  order_id,\n  status,\n  amount,\n  updated_at,\n  ingestion_id\nFROM raw_orders_cdc\nWHERE updated_at >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 7 DAY)\nQUALIFY ROW_NUMBER() OVER (\n  PARTITION BY order_id \n  ORDER BY updated_at DESC, ingestion_id DESC\n) = 1;",
      "explanation": "BigQuery's QUALIFY clause filters the results of window functions directly in the main query block, eliminating the need for an outer wrapper subquery."
    },
    {
      "id": "sql-8",
      "title": "Multi-Touch Marketing Attribution (First-Touch vs Last-Touch)",
      "category": "Analytical SQL & Window Functions",
      "difficulty": "Hard",
      "scenario": "Given touchpoints(user_id, channel, touch_time) and conversions(user_id, order_id, revenue, conversion_time), assign 50% revenue credit to the First Touch channel and 50% credit to the Last Touch channel prior to conversion.",
      "sampleSchema": "touchpoints (user_id INT, channel STRING, touch_time TIMESTAMP)\nconversions (user_id INT, order_id INT, revenue NUMERIC, conversion_time TIMESTAMP)",
      "solutionQuery": "WITH eligible_touches AS (\n  SELECT \n    c.order_id,\n    c.revenue,\n    t.channel,\n    t.touch_time,\n    ROW_NUMBER() OVER (PARTITION BY c.order_id ORDER BY t.touch_time ASC) AS touch_asc,\n    ROW_NUMBER() OVER (PARTITION BY c.order_id ORDER BY t.touch_time DESC) AS touch_desc\n  FROM conversions c\n  JOIN touchpoints t \n    ON c.user_id = t.user_id \n    AND t.touch_time <= c.conversion_time\n),\nattributed_revenue AS (\n  SELECT \n    order_id,\n    channel,\n    CASE \n      WHEN touch_asc = 1 AND touch_desc = 1 THEN revenue -- Single touch gets 100%\n      WHEN touch_asc = 1 THEN revenue * 0.5               -- First touch gets 50%\n      WHEN touch_desc = 1 THEN revenue * 0.5              -- Last touch gets 50%\n      ELSE 0\n    END AS attributed_amount\n  FROM eligible_touches\n  WHERE touch_asc = 1 OR touch_desc = 1\n)\nSELECT \n  channel,\n  ROUND(SUM(attributed_amount), 2) AS total_attributed_revenue\nFROM attributed_revenue\nGROUP BY channel\nORDER BY total_attributed_revenue DESC;",
      "explanation": "Shows dual-direction window numbering (touch_asc = 1 for First-Touch, touch_desc = 1 for Last-Touch) to attribute revenue without multiple self-joins."
    },
    {
      "id": "sql-9",
      "title": "Finding Missing Sequential IDs in Audit Logs (GENERATE_ARRAY Technique)",
      "category": "Gaps & Completeness Auditing",
      "difficulty": "Medium",
      "scenario": "An enterprise financial audit log financial_tx(tx_id, tx_date, amount) has auto-incrementing tx_id from 100000 to 200000. Identify any missing tx_id numbers that were deleted or skipped due to failed transactions.",
      "sampleSchema": "financial_tx (tx_id INT64, tx_date DATE, amount NUMERIC)",
      "solutionQuery": "WITH min_max AS (\n  SELECT MIN(tx_id) AS min_id, MAX(tx_id) AS max_id FROM financial_tx\n),\nexpected_range AS (\n  SELECT expected_id\n  FROM min_max,\n  UNNEST(GENERATE_ARRAY(min_id, max_id)) AS expected_id\n)\nSELECT \n  e.expected_id AS missing_transaction_id\nFROM expected_range e\nLEFT JOIN financial_tx f ON e.expected_id = f.tx_id\nWHERE f.tx_id IS NULL\nORDER BY missing_transaction_id ASC;",
      "explanation": "In BigQuery, UNNEST(GENERATE_ARRAY(min, max)) generates a contiguous sequence in microseconds, allowing a clean anti-join to find missing sequence holes."
    },
    {
      "id": "sql-10",
      "title": "Hierarchical Org-Chart / Data Lineage Traversal (Recursive CTE)",
      "category": "Recursive Graphs in SQL",
      "difficulty": "Hard",
      "scenario": "Given a pipeline dependency table pipeline_lineage(pipeline_id, upstream_pipeline_id), write a recursive query that traces the full upstream lineage tree starting from the executive reporting pipeline 'exec_dash_pipeline'.",
      "sampleSchema": "pipeline_lineage (pipeline_id STRING, upstream_pipeline_id STRING)",
      "solutionQuery": "WITH RECURSIVE lineage_tree AS (\n  -- Anchor Member: Root target pipeline\n  SELECT \n    pipeline_id,\n    upstream_pipeline_id,\n    1 AS lineage_depth,\n    CAST(pipeline_id AS STRING) AS lineage_path\n  FROM pipeline_lineage\n  WHERE pipeline_id = 'exec_dash_pipeline'\n\n  UNION ALL\n\n  -- Recursive Member: Trace upstream ancestors\n  SELECT \n    p.pipeline_id,\n    p.upstream_pipeline_id,\n    t.lineage_depth + 1 AS lineage_depth,\n    CONCAT(t.lineage_path, ' -> ', p.pipeline_id) AS lineage_path\n  FROM pipeline_lineage p\n  JOIN lineage_tree t ON p.pipeline_id = t.upstream_pipeline_id\n  WHERE t.lineage_depth < 10 -- Prevent infinite cycles\n)\nSELECT \n  pipeline_id,\n  upstream_pipeline_id,\n  lineage_depth,\n  lineage_path\nFROM lineage_tree\nORDER BY lineage_depth ASC;",
      "explanation": "Recursive CTEs iteratively join the output of the previous step until the base condition terminates, tracing arbitrarily deep Directed Acyclic Graphs directly in SQL."
    }
  ],
  "techDeepDives": [
    {
      "id": "deep-snowflake",
      "category": "snowflake",
      "tag": "SNOWFLAKE INTERNALS • FIRST-PRINCIPLES ARCHITECTURE",
      "title": "Snowflake Deep Storage, Pruning & Virtual Warehouse Architecture",
      "summary": "First-principles architecture of Snowflake's 3-tier decoupled engine: Micro-partition metadata pruning, clustering depth calculus, NVMe SSD caching, and local vs remote memory spilling.",
      "metrics": [
        {
          "label": "Storage Unit",
          "val": "50–500MB Columnar (PAX)"
        },
        {
          "label": "Pruning Efficiency",
          "val": "Up to 98% I/O Bypassed"
        },
        {
          "label": "Clustering Rule",
          "val": "Only Tables > 1 TB"
        },
        {
          "label": "Spill Degradation",
          "val": "Remote Spill = 10x-50x Latency"
        }
      ],
      "architecture": {
        "overview": "Snowflake achieves infinite elasticity by decoupling Compute from Storage through three isolated tiers. Storage is managed as immutable micro-partitions in cloud object storage, compute runs on stateless virtual warehouse VM clusters with NVMe caching, and all transaction metadata lives in a global Cloud Services catalog.",
        "tiers": [
          {
            "name": "1. Cloud Services Layer (The Brain)",
            "tech": "FoundationDB KV Catalog + Cost-Based Optimizer (CBO)",
            "details": "Maintains ACID transactions via MVCC. Holds all table metadata, partition dictionary boundaries, min/max histograms, and access control. Queries compile here in ~5-15ms before dispatching to compute."
          },
          {
            "name": "2. Virtual Compute Warehouses (The Muscles)",
            "tech": "Independent VM Clusters + Local NVMe SSD Cache",
            "details": "Pure compute clusters (T-shirt sizes X-Small = 1 node up to 6X-Large = 512 nodes). When reading data, workers cache columnar micro-partitions on local NVMe SSDs. If queries require more memory than available RAM, data spills to local SSD; if local SSD exhausts, it spills to remote storage."
          },
          {
            "name": "3. Centralized Cloud Storage (The Vault)",
            "tech": "Amazon S3 / GCS / Azure Blob Storage",
            "details": "All data resides in immutable, compressed micro-partitions (50MB–500MB uncompressed). Rows are organized in hybrid columnar format (PAX - Partition Attributes Along Data). Because partitions are immutable, updates/deletes generate new micro-partitions, enabling Time Travel and Zero-Copy Cloning with zero storage duplication."
          }
        ],
        "simulator": {
          "type": "snowflake-pruning",
          "tableName": "SALES_TRANSACTIONS (10 Billion Rows / 1.2 TB)",
          "queries": [
            {
              "id": "q1",
              "label": "Query 1: Chronological Date Filter (Natural Ingestion Order)",
              "sql": "SELECT * FROM sales_transactions WHERE order_date = '2026-10-05';",
              "scannedIds": [
                14,
                15
              ],
              "prunedCount": 14,
              "scannedCount": 2,
              "prunedPercent": "87.5%",
              "bytesScanned": "120 MB",
              "bytesSaved": "840 MB",
              "latency": "1.1s",
              "verdict": "OPTIMAL: Chronological loading created tight date boundaries. 14 micro-partitions skipped via metadata without disk I/O."
            },
            {
              "id": "q2",
              "label": "Query 2: High-Cardinality Unclustered Key (Full Table Scan)",
              "sql": "SELECT * FROM sales_transactions WHERE customer_id = 94821;",
              "scannedIds": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15
              ],
              "prunedCount": 0,
              "scannedCount": 16,
              "prunedPercent": "0.0%",
              "bytesScanned": "960 MB",
              "bytesSaved": "0 MB",
              "latency": "16.4s",
              "verdict": "DISASTER: customer_id is scattered across all micro-partitions. Snowflake must scan 100% of data. Do NOT cluster if this query runs rarely!"
            },
            {
              "id": "q3",
              "label": "Query 3: Multi-Column Clustered Query (Region + Date)",
              "sql": "SELECT * FROM sales_transactions WHERE region = 'APAC' AND order_date >= '2026-10-01';",
              "scannedIds": [
                2,
                3
              ],
              "prunedCount": 14,
              "scannedCount": 2,
              "prunedPercent": "87.5%",
              "bytesScanned": "110 MB",
              "bytesSaved": "850 MB",
              "latency": "0.9s",
              "verdict": "PRUNED: Explicit CLUSTER BY (region, order_date) grouped APAC rows together, allowing immediate metadata skipping."
            }
          ],
          "partitions": [
            {
              "id": 0,
              "name": "MP-01",
              "region": "AMER",
              "dateRange": "2026-08-01 - 2026-08-15",
              "rows": "620k",
              "size": "60MB"
            },
            {
              "id": 1,
              "name": "MP-02",
              "region": "AMER",
              "dateRange": "2026-08-16 - 2026-08-31",
              "rows": "610k",
              "size": "58MB"
            },
            {
              "id": 2,
              "name": "MP-03",
              "region": "APAC",
              "dateRange": "2026-10-01 - 2026-10-04",
              "rows": "590k",
              "size": "55MB"
            },
            {
              "id": 3,
              "name": "MP-04",
              "region": "APAC",
              "dateRange": "2026-10-05 - 2026-10-08",
              "rows": "640k",
              "size": "62MB"
            },
            {
              "id": 4,
              "name": "MP-05",
              "region": "EMEA",
              "dateRange": "2026-09-01 - 2026-09-10",
              "rows": "600k",
              "size": "57MB"
            },
            {
              "id": 5,
              "name": "MP-06",
              "region": "EMEA",
              "dateRange": "2026-09-11 - 2026-09-20",
              "rows": "630k",
              "size": "61MB"
            },
            {
              "id": 6,
              "name": "MP-07",
              "region": "LATAM",
              "dateRange": "2026-07-01 - 2026-07-15",
              "rows": "580k",
              "size": "54MB"
            },
            {
              "id": 7,
              "name": "MP-08",
              "region": "LATAM",
              "dateRange": "2026-07-16 - 2026-07-31",
              "rows": "570k",
              "size": "53MB"
            },
            {
              "id": 8,
              "name": "MP-09",
              "region": "AMER",
              "dateRange": "2026-09-01 - 2026-09-15",
              "rows": "640k",
              "size": "63MB"
            },
            {
              "id": 9,
              "name": "MP-10",
              "region": "AMER",
              "dateRange": "2026-09-16 - 2026-09-30",
              "rows": "650k",
              "size": "64MB"
            },
            {
              "id": 10,
              "name": "MP-11",
              "region": "EMEA",
              "dateRange": "2026-09-21 - 2026-09-30",
              "rows": "610k",
              "size": "59MB"
            },
            {
              "id": 11,
              "name": "MP-12",
              "region": "EMEA",
              "dateRange": "2026-10-01 - 2026-10-05",
              "rows": "620k",
              "size": "60MB"
            },
            {
              "id": 12,
              "name": "MP-13",
              "region": "APAC",
              "dateRange": "2026-09-01 - 2026-09-15",
              "rows": "580k",
              "size": "56MB"
            },
            {
              "id": 13,
              "name": "MP-14",
              "region": "APAC",
              "dateRange": "2026-09-16 - 2026-09-30",
              "rows": "590k",
              "size": "57MB"
            },
            {
              "id": 14,
              "name": "MP-15",
              "region": "ALL",
              "dateRange": "2026-10-05 - 2026-10-05",
              "rows": "680k",
              "size": "65MB"
            },
            {
              "id": 15,
              "name": "MP-16",
              "region": "ALL",
              "dateRange": "2026-10-05 - 2026-10-06",
              "rows": "670k",
              "size": "64MB"
            }
          ]
        }
      },
      "productionCode": [
        {
          "title": "1. Auditing Table Clustering Depth & Partition Overlap",
          "lang": "sql",
          "code": "-- Step 1: Query the built-in clustering telemetry function\nSELECT SYSTEM$CLUSTERING_INFORMATION('SALES_FACT', '(TRANSACTION_DATE, REGION_ID)');\n\n/* Example Production Output Interpretation:\n{\n  \"cluster_by_keys\": \"COLUMN (TRANSACTION_DATE, REGION_ID)\",\n  \"total_partition_count\": 48291,\n  \"total_constant_partition_count\": 41200, -- 85.3% overlap-free!\n  \"average_overlaps\": 1.42,               -- Excellent: < 2.0 indicates minimal scanning\n  \"average_depth\": 2.18,                  -- Ideal depth is < 5 (ratio of partitions containing key)\n  \"partition_depth_histogram\": {\n    \"0000\": 0,\n    \"0001\": 41200,\n    \"0002\": 5100,\n    \"0003\": 1500,\n    \"0004\": 491\n  }\n}\n*/"
        },
        {
          "title": "2. Production Telemetry: Hunting Expensive Remote Memory Spilling",
          "lang": "sql",
          "code": "-- Detect queries that exhausted Warehouse RAM & local NVMe SSD, forcing remote cloud storage spill\nSELECT \n    QUERY_ID,\n    USER_NAME,\n    WAREHOUSE_NAME,\n    WAREHOUSE_SIZE,\n    ROUND(TOTAL_ELAPSED_TIME / 1000, 2) AS DURATION_SECONDS,\n    ROUND(BYTES_SCANNED / 1e9, 2) AS GB_SCANNED,\n    ROUND(BYTES_SPILLED_TO_LOCAL_STORAGE / 1e9, 2) AS GB_SPILLED_LOCAL_SSD,\n    ROUND(BYTES_SPILLED_TO_REMOTE_STORAGE / 1e9, 2) AS GB_SPILLED_REMOTE_S3,\n    SUBSTRING(QUERY_TEXT, 1, 120) AS QUERY_SNIPPET\nFROM SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY\nWHERE START_TIME >= DATEADD('day', -7, CURRENT_TIMESTAMP())\n  AND BYTES_SPILLED_TO_REMOTE_STORAGE > 0\nORDER BY BYTES_SPILLED_TO_REMOTE_STORAGE DESC\nLIMIT 15;\n\n-- Remediation: 1) Eliminate Cartesian joins, 2) Pre-filter via partition pruning, 3) Scale up warehouse RAM."
        },
        {
          "title": "3. Production DDL: Cost-Governed Multi-Cluster Virtual Warehouse",
          "lang": "sql",
          "code": "-- Production Warehouse with strict auto-suspend and scaling economics\nCREATE OR REPLACE WAREHOUSE ETL_PROD_WH WITH\n    WAREHOUSE_SIZE = 'LARGE'                 -- 8 nodes / 64 cores\n    MIN_CLUSTER_COUNT = 1\n    MAX_CLUSTER_COUNT = 3                   -- Auto-scale up to 3 clusters during morning SLA spikes\n    SCALING_POLICY = 'ECONOMY'              -- Waits 6 minutes before spawning cluster to save credits\n    AUTO_SUSPEND = 60                       -- Suspend after 60 seconds of idle inactivity\n    AUTO_RESUME = TRUE\n    INITIALLY_SUSPENDED = TRUE\n    STATEMENT_TIMEOUT_IN_SECONDS = 3600     -- Kill rogue runaway queries after 1 hour\n    STATEMENT_QUEUED_TIMEOUT_IN_SECONDS = 300;\n\n-- Attach strict account credit guardrail\nCREATE OR REPLACE RESOURCE MONITOR MONTHLY_CAP WITH\n    CREDIT_QUOTA = 5000\n    FREQUENCY = 'MONTHLY'\n    START_TIMESTAMP = IMMEDIATELY\n    TRIGGERS \n        ON 80 PERCENT DO NOTIFY\n        ON 100 PERCENT DO SUSPEND\n        ON 110 PERCENT DO SUSPEND_IMMEDIATE;"
        }
      ],
      "defenseBattlecards": [
        {
          "question": "An interviewer asks: 'We have a 25TB sales table in Snowflake. Business queries filtering by order_date and region are taking 45 seconds. How do you optimize it?'",
          "juniorTrap": "Average candidate says: 'I will create a B-Tree index on order_date and region, and scale the warehouse from Medium to 2X-Large.'",
          "staffResponse": "1) Call out that Snowflake has zero B-tree indexes. 2) Inspect SYSTEM$CLUSTERING_INFORMATION('sales', '(order_date, region)') to inspect the current clustering depth and overlap. 3) If data arrived randomly from multiple upstream systems, define CLUSTER BY (region, order_date)—ordering the lower-cardinality column first (region: ~10 distinct values) so each region bucket is sorted chronologically by order_date. 4) Calculate the credit ROI of Automatic Clustering: compare the monthly reclustering credits against warehouse compute saved on daily queries.",
          "underTheHood": "Snowflake micro-partitions are immutable 50MB-500MB PAX columnar files stored in cloud object storage. Reclustering does NOT update rows in place; it reads overlapping micro-partitions, sorts them, writes brand new micro-partitions, and updates the FoundationDB metadata pointers atomically."
        },
        {
          "question": "How do you diagnose and fix a query that is spilling gigabytes of data to Remote Storage?",
          "juniorTrap": "Average candidate says: 'Just double the warehouse size to give it more memory.'",
          "staffResponse": "Remote storage spill means the query exhausted both the Virtual Machine's physical RAM and its local NVMe SSD swap space, falling back to network cloud storage (S3/GCS/Blob) with 10x-50x latency penalty. Before scaling compute, I check: 1) Join cardinality explosion: Did an unkeyed join duplicate millions of rows in memory? 2) Aggregation keys: Are we running SELECT DISTINCT or GROUP BY on 50 million high-cardinality strings? 3) Partition pruning: Can we push filters down to eliminate 80% of input rows? Only if the plan is already optimal do I scale the warehouse up (which doubles RAM per node).",
          "underTheHood": "Virtual Warehouse nodes use local NVMe SSDs as a high-speed L2 buffer for micro-partitions and temporary intermediate operator memory. Spilling to local storage incurs minimal penalty (~1.5x), but remote spill requires synchronous network HTTP writes to S3/Blob, triggering severe thread stalls."
        }
      ],
      "incidentPostMortems": [
        {
          "title": "Case Study: The $35,000 Auto-Clustering Runaway Weekend Incident",
          "symptoms": "Over a single weekend, Snowflake account credit consumption spiked by 8,200 credits ($32,800), with zero active BI users logged in.",
          "rootCause": "A junior data engineer configured an automated CDC ingestion pipeline micro-batching 10,000 rows into a table every 45 seconds, while setting CLUSTER BY (user_id, event_time). Because user_id was high-cardinality and data arrived continuously, Snowflake's background Auto-Clustering service repeatedly rebuilt hundreds of 100MB micro-partitions 24/7 to maintain strict sort order.",
          "resolution": "1) Immediately executed ALTER TABLE events SUSPEND RECLUSTER; to halt credit burn. 2) Redesigned the architecture to ingest raw CDC into an unclustered append-only staging table. 3) Scheduled a single batch merge & clustering window once per night during off-peak hours using a dedicated warehouse with a 1-hour statement timeout."
        }
      ]
    },
    {
      "id": "deep-pyspark",
      "category": "spark",
      "tag": "APACHE SPARK / DATABRICKS • ENGINE INTERNALS",
      "title": "PySpark & Databricks Architecture: Catalyst, Tungsten, Shuffles & Skew",
      "summary": "Deep dive into Spark internals: Driver-executor topologies, Catalyst query compilation (AST to Whole-Stage CodeGen), JVM memory partitions, and key salting techniques for join skew.",
      "metrics": [
        {
          "label": "Engine Target",
          "val": "Catalyst & Tungsten Vectorized"
        },
        {
          "label": "Shuffle Bottleneck",
          "val": "#1 Cause of Cloud OOMs"
        },
        {
          "label": "Broadcast Limit",
          "val": "Default 10MB (Safe up to 2GB)"
        },
        {
          "label": "Skew Fix",
          "val": "Two-Phase Salting (0..N-1)"
        }
      ],
      "architecture": {
        "overview": "Spark achieves high-throughput distributed processing through a master-worker topology. The Driver builds the execution DAG and coordinates tasks, while Executor JVMs process data partitions in parallel using Unified Memory (Storage vs Execution). Shuffles repartition data across the physical network, making data skew the leading cause of straggler tasks and out-of-memory crashes.",
        "tiers": [
          {
            "name": "1. Catalyst Optimizer Pipeline",
            "tech": "Tree Transformations + Rule & Cost-Based Optimization",
            "details": "Converts DataFrame operations: 1) Unresolved Logical Plan -> 2) Analyzed Logical Plan (resolves catalog types) -> 3) Optimized Logical Plan (pushes predicates down, prunes unused columns) -> 4) Physical Plan (chooses BroadcastHashJoin vs SortMergeJoin) -> 5) Whole-Stage CodeGen (Tungsten compiles Java bytecode in CPU registers)."
          },
          {
            "name": "2. Unified Memory Management (JVM Heap)",
            "tech": "Execution Memory vs Storage Memory (Dynamic Borrowing)",
            "details": "Executor memory is split into: Reserved (300MB), User Memory (25%), and Unified Spark Memory (75%). Unified memory dynamically borrows between Execution (shuffles, joins, aggregations) and Storage (cached DataFrames). Execution memory always has eviction priority: if a join needs RAM, cached data is evicted to disk."
          },
          {
            "name": "3. The Network Shuffle Barrier",
            "tech": "Netty Block Transfer Service + Shuffle Spill",
            "details": "Wide transformations (groupBy, join, distinct, repartition) force workers to hash records by key and transfer them over the physical network. If partitions are unevenly sized (skew), one executor receives 80% of records, creating a Straggler Task that blocks the entire stage."
          }
        ],
        "simulator": {
          "type": "spark-skew",
          "tableName": "STREAMING CLICKSTREAM JOIN (100 Million Events)",
          "scenarios": [
            {
              "id": "skew-default",
              "name": "Default Join (Severe Skew: 85% of records have user_id = NULL)",
              "executors": [
                {
                  "name": "Executor 1",
                  "task": "Partition 0 (user_id = NULL)",
                  "rows": "85 Million",
                  "memory": "98% (Spilling)",
                  "status": "STRAGGLER (2h 15m)",
                  "failed": true
                },
                {
                  "name": "Executor 2",
                  "task": "Partition 1 (user_id 1-100k)",
                  "rows": "5 Million",
                  "memory": "18%",
                  "status": "Finished (12s)",
                  "failed": false
                },
                {
                  "name": "Executor 3",
                  "task": "Partition 2 (user_id 100k-200k)",
                  "rows": "5 Million",
                  "memory": "19%",
                  "status": "Finished (11s)",
                  "failed": false
                },
                {
                  "name": "Executor 4",
                  "task": "Partition 3 (user_id 200k-300k)",
                  "rows": "5 Million",
                  "memory": "17%",
                  "status": "Finished (10s)",
                  "failed": false
                }
              ],
              "verdict": "CRITICAL PIPELINE STALL: Executor 1 ran out of JVM heap, spilled 18GB to disk, and suffered endless Garbage Collection pause times."
            },
            {
              "id": "skew-salted",
              "name": "Key Salting Enabled (Random Salt 0..9 Applied to NULL & Hot Keys)",
              "executors": [
                {
                  "name": "Executor 1",
                  "task": "Salted Buckets 0-2",
                  "rows": "25 Million",
                  "memory": "32%",
                  "status": "Finished (34s)",
                  "failed": false
                },
                {
                  "name": "Executor 2",
                  "task": "Salted Buckets 3-5",
                  "rows": "25 Million",
                  "memory": "31%",
                  "status": "Finished (35s)",
                  "failed": false
                },
                {
                  "name": "Executor 3",
                  "task": "Salted Buckets 6-7",
                  "rows": "25 Million",
                  "memory": "30%",
                  "status": "Finished (33s)",
                  "failed": false
                },
                {
                  "name": "Executor 4",
                  "task": "Salted Buckets 8-9",
                  "rows": "25 Million",
                  "memory": "33%",
                  "status": "Finished (36s)",
                  "failed": false
                }
              ],
              "verdict": "BALANCED EXECUTION: Work uniformly distributed across all 4 executor cores. Total stage completion reduced from 2h 15m to 36 seconds!"
            }
          ]
        }
      },
      "productionCode": [
        {
          "title": "1. Production Key Salting Implementation in PySpark",
          "lang": "python",
          "code": "from pyspark.sql import functions as F\n\n# Scenario: large_df has severe skew on 'merchant_id' (e.g. Amazon/Walmart have 100M rows)\nSALT_BUCKETS = 10\n\n# Step 1: Salt the skewed large dataset with a random integer [0 .. SALT_BUCKETS-1]\nsalted_large_df = large_df.withColumn(\n    \"salt\", \n    F.floor(F.rand() * SALT_BUCKETS)\n).withColumn(\n    \"salted_key\", \n    F.concat(F.col(\"merchant_id\"), F.lit(\"_\"), F.col(\"salt\"))\n)\n\n# Step 2: Explode the smaller lookup dimension across all SALT_BUCKETS so every salt finds a match\nsalt_array = F.array([F.lit(i) for i in range(SALT_BUCKETS)])\nexploded_dim_df = dim_df.withColumn(\"salt\", F.explode(salt_array)) \\\n                        .withColumn(\"salted_key\", F.concat(F.col(\"merchant_id\"), F.lit(\"_\"), F.col(\"salt\")))\n\n# Step 3: Join on the salted composite key -> Eliminates 100% of single-partition skew!\nbalanced_joined_df = salted_large_df.join(\n    exploded_dim_df, \n    on=\"salted_key\", \n    how=\"inner\"\n).drop(\"salted_key\", \"salt\")"
        },
        {
          "title": "2. Production Databricks / Spark 3.x Adaptive Query Execution (AQE) Config",
          "lang": "python",
          "code": "# Production cluster configuration for automated runtime optimization\nspark.conf.set(\"spark.sql.adaptive.enabled\", \"true\")\nspark.conf.set(\"spark.sql.adaptive.coalescePartitions.enabled\", \"true\")  # Dynamically merges tiny shuffle partitions\nspark.conf.set(\"spark.sql.adaptive.coalescePartitions.minPartitionSize\", \"64MB\")\nspark.conf.set(\"spark.sql.adaptive.skewJoin.enabled\", \"true\")           # Auto-splits skewed partitions at runtime\nspark.conf.set(\"spark.sql.adaptive.skewJoin.skewedPartitionFactor\", \"5\")\nspark.conf.set(\"spark.sql.adaptive.skewJoin.skewedPartitionThresholdInBytes\", \"256MB\")\nspark.conf.set(\"spark.sql.autoBroadcastJoinThreshold\", \"67108864\")     # Increase broadcast threshold to 64MB (default 10MB)"
        }
      ],
      "defenseBattlecards": [
        {
          "question": "An interviewer asks: 'Your Spark stage has 200 tasks. 199 tasks finish in 15 seconds, but Task 147 has been running for 2 hours and eventually fails with java.lang.OutOfMemoryError: Java heap space. How do you diagnose and fix it?'",
          "juniorTrap": "Average candidate says: 'Increase the executor memory in spark-submit from 8G to 16G.'",
          "staffResponse": "1) Diagnose: Open the Spark Web UI, navigate to the Stages tab, and look at the Task Metrics Summary table. Examine the Min, Median, and Max of 'Shuffle Read Size' and 'Duration'. If Max is 14GB while Median is 80MB, this is textbook Data Skew. 2) Identify the skew key: Run a frequency count on the join/groupBy column (SELECT key, COUNT(*) FROM df GROUP BY key ORDER BY 2 DESC LIMIT 10). Usually it is caused by NULL values, default placeholder IDs (-1), or a few super-entities. 3) Fix: For NULLs, filter them out before the join and union them back later. For super-entities, apply Two-Phase Key Salting or enable Spark 3.x AQE Skew Join.",
          "underTheHood": "When all rows sharing the same hash key land on one executor partition, that executor's Shuffle Block buffer overflows its allotted Execution Memory. The JVM is forced into continuous Full GC cycles attempting to reclaim space, stalling execution threads and eventually throwing OOM when off-heap or heap limits breach."
        }
      ],
      "incidentPostMortems": [
        {
          "title": "Case Study: The 4-Hour Nightly ETL Delay Caused by Default 200 Shuffle Partitions",
          "symptoms": "An hourly batch pipeline ingesting 150MB of incremental sales data was taking 45 minutes to run, causing severe SLA breaches.",
          "rootCause": "The code ran a groupBy operation without tuning spark.sql.shuffle.partitions (default: 200). Splitting 150MB across 200 partitions resulted in 200 tiny tasks of ~750KB each. The overhead of the Driver serializing, scheduling, and dispatching 200 tasks across worker threads consumed 95% of total runtime, doing almost zero real computation.",
          "resolution": "Configured spark.sql.shuffle.partitions to 8 for the hourly micro-pipeline (matching executor core count), reducing execution time from 45 minutes to 42 seconds."
        }
      ]
    },
    {
      "id": "deep-gcp",
      "category": "gcp",
      "tag": "GOOGLE CLOUD • BIGQUERY & DATAFLOW ARCHITECTURE",
      "title": "Google BigQuery & Cloud Dataflow: Dremel, Colossus & Streaming Watermarks",
      "summary": "Master Google's internal architecture: Dremel serving trees, Capacitor columnar storage on Colossus, Jupiter network bisection bandwidth, and Dataflow event-time watermarking.",
      "metrics": [
        {
          "label": "Storage Engine",
          "val": "Colossus (Capacitor Columnar)"
        },
        {
          "label": "Execution Unit",
          "val": "Serverless Flex Slots"
        },
        {
          "label": "Network Fabric",
          "val": "Jupiter 100Gbps Bisection"
        },
        {
          "label": "Streaming Clock",
          "val": "Event-Time Watermarks"
        }
      ],
      "architecture": {
        "overview": "BigQuery is completely serverless because it decouples compute from storage via Google's multi-terabit Jupiter network. Compute is dynamically allocated as Dremel Slots structured in an execution tree (Root -> Mixers -> Leaf nodes), querying compressed Capacitor columnar files stored in Colossus distributed file system.",
        "tiers": [
          {
            "name": "1. Dremel Multi-Tier Serving Tree",
            "tech": "Root Server -> Intermediate Mixers -> Leaf Processing Slots",
            "details": "A query enters the Root server, which rewrites the SQL into execution stages. Intermediate mixers aggregate partial results, and thousands of Leaf Slots read data blocks from Colossus in parallel. Slot allocation is completely dynamic per query stage."
          },
          {
            "name": "2. Colossus Distributed Storage (Capacitor Format)",
            "tech": "Distributed File System with Erasure Coding & RLE/Dictionary Compression",
            "details": "Files are stored as immutable, encrypted Capacitor blocks with column-oriented projection. BigQuery only reads the byte offsets of the exact columns requested in the SELECT statement, pruning unreferenced columns at zero disk cost."
          },
          {
            "name": "3. Cloud Dataflow (Apache Beam) Watermark Engine",
            "tech": "Event Time vs Processing Time Tracking",
            "details": "A Watermark is the system's monotonic clock tracking data arrival. It guarantees that all events with timestamp <= T have been processed. Late-arriving events older than the watermark trigger speculative triggers or are rerouted to a Dead Letter Sink."
          }
        ],
        "simulator": {
          "type": "gcp-bigquery",
          "tableName": "ENTERPRISE_AUDIT_LOGS (2.4 Petabytes / 8.5 Billion Rows)",
          "queries": [
            {
              "id": "bq-q1",
              "label": "Query 1: Partitioned & Clustered (Date + Store ID Filter)",
              "sql": "SELECT * FROM enterprise_audit_logs WHERE DATE(order_timestamp) = '2026-10-05' AND store_id = 4281;",
              "slotsAllocated": 120,
              "bytesScanned": "420 MB",
              "bytesSaved": "2.39 Petabytes",
              "costUsd": "$0.003",
              "latency": "0.85s",
              "verdict": "OPTIMAL: BigQuery pruned 729 daily partitions. Capacitor columnar blocks skipped via Colossus dictionary headers."
            },
            {
              "id": "bq-q2",
              "label": "Query 2: Unconstrained Full Table Scan (Missing Partition Filter)",
              "sql": "SELECT * FROM enterprise_audit_logs WHERE status = 'FAILED';",
              "slotsAllocated": 2000,
              "bytesScanned": "2.40 Petabytes",
              "bytesSaved": "0 MB",
              "costUsd": "$15,000.00",
              "latency": "58.2s",
              "verdict": "DISASTER: Missing partition constraint forced Colossus to scan 100% of data blocks across 2.4 Petabytes! Enforce require_partition_filter = TRUE."
            }
          ]
        }
      },
      "productionCode": [
        {
          "title": "1. Production BigQuery Partitioned & Clustered Table DDL",
          "lang": "sql",
          "code": "-- DDL with multi-column clustering and partition expiration for cost defense\nCREATE OR REPLACE TABLE `enterprise_analytics.orders_fact`\n(\n    order_id STRING OPTIONS(description=\"Unique order UUID\"),\n    customer_id INT64,\n    store_id INT64,\n    order_timestamp TIMESTAMP,\n    total_amount NUMERIC,\n    status STRING\n)\nPARTITION BY DATE(order_timestamp)\nCLUSTER BY store_id, customer_id\nOPTIONS(\n    partition_expiration_days = 730, -- Auto-drop partitions older than 2 years\n    require_partition_filter = TRUE   -- Forbids runaway FULL TABLE SCANS without a date filter!\n);\n\n-- Validation: Queries must supply WHERE DATE(order_timestamp) >= '2026-01-01' or fail at compile time."
        },
        {
          "title": "2. BigQuery Slot Utilization & Cost Attribution Audit Query",
          "lang": "sql",
          "code": "-- Audit project-wide slot consumption and find the top 5 most expensive queries\nSELECT\n    project_id,\n    user_email,\n    job_id,\n    creation_time,\n    ROUND(total_bytes_billed / 1e12, 2) AS tb_billed,\n    ROUND(total_bytes_billed / 1e12 * 6.25, 2) AS estimated_cost_usd,\n    ROUND(total_slot_ms / (1000 * 60), 2) AS slot_minutes,\n    query\nFROM `region-us`.INFORMATION_SCHEMA.JOBS_BY_PROJECT\nWHERE creation_time >= TIMESTAMP_SUB(CURRENT_TIMESTAMP(), INTERVAL 24 HOUR)\n  AND job_type = 'QUERY'\nORDER BY total_bytes_billed DESC\nLIMIT 5;"
        }
      ],
      "defenseBattlecards": [
        {
          "question": "A candidate suggests running a BigQuery MERGE statement every 10 seconds to upsert real-time CDC records from Postgres. Why is this a disaster, and what is Google's native pattern?",
          "juniorTrap": "Junior says: 'That is fine, BigQuery supports MERGE statements natively.'",
          "staffResponse": "MERGE in BigQuery scans the entire partition to rewrite it. Running it every 10 seconds exhausts BigQuery's partition modification quota (max 1,500 modifications per table per day) and burns thousands of dollars in query scan costs. Google's production pattern: 1) Ingest records continuously via the BigQuery Storage Write API (append-only stream) into a raw changelog table at sub-second latency. 2) Expose a real-time deduplicated View using QUALIFY ROW_NUMBER() OVER(PARTITION BY id ORDER BY updated_at DESC) = 1. 3) Run a single scheduled batch merge once per night during off-peak hours to compact row history.",
          "underTheHood": "BigQuery's Storage Write API writes directly to Colossus storage buffers using gRPC streams with zero query execution overhead, bypassing SQL compilation and partition rewrites."
        }
      ],
      "incidentPostMortems": [
        {
          "title": "Case Study: The $12,000 Unpartitioned Query Accident",
          "symptoms": "A junior analyst ran SELECT * FROM raw_logs WHERE user_id = '123' on a 2 Petabyte unpartitioned table.",
          "rootCause": "The table had no require_partition_filter constraint. BigQuery scanned 1.9 Petabytes of raw data at $6.25/TB, incurring an instant $11,875 query charge.",
          "resolution": "Enacted organization-wide policy: 1) ALTER TABLE raw_logs SET OPTIONS (require_partition_filter = TRUE). 2) Applied BigQuery custom query cost quotas limiting single queries to max 5TB ($31.25) per user."
        }
      ]
    },
    {
      "id": "deep-azure",
      "category": "azure",
      "tag": "AZURE ENTERPRISE DATA • LAKEHOUSE & ORCHESTRATION",
      "title": "Azure Data Factory & ADLS Gen2: Metadata-Driven Frameworks & SHIR",
      "summary": "Master enterprise Azure data platforms: Metadata-driven dynamic ADF pipelines, Self-Hosted Integration Runtime (SHIR) hybrid security, and ADLS Gen2 POSIX Hierarchical Namespaces.",
      "metrics": [
        {
          "label": "Pipeline Pattern",
          "val": "Metadata-Driven (1 to N)"
        },
        {
          "label": "Storage Standard",
          "val": "ADLS Gen2 Hierarchical (HNS)"
        },
        {
          "label": "Hybrid Security",
          "val": "SHIR Outbound TLS 443"
        },
        {
          "label": "Rename Complexity",
          "val": "O(1) Atomic Metadata Pointer"
        }
      ],
      "architecture": {
        "overview": "Enterprise cloud migrations require decoupling pipeline logic from data schemas. Azure Data Factory coordinates ingestion through a centralized SQL metadata control table, while Self-Hosted Integration Runtimes (SHIR) bridge on-premise networks to cloud object storage securely without opening inbound firewall ports.",
        "tiers": [
          {
            "name": "1. Metadata Control-Table Orchestration",
            "tech": "Azure SQL DB + ADF Parameterized Pipelines",
            "details": "A single master pipeline queries an orchestration table listing tables, watermarks, source queries, and target ADLS paths. A ForEach activity executes parameterized child pipelines dynamically, eliminating the need to maintain hundreds of separate ADF pipelines."
          },
          {
            "name": "2. Self-Hosted Integration Runtime (SHIR)",
            "tech": "On-Prem VM Gateway with Outbound Port 443",
            "details": "Extracts data from legacy databases (SAP HANA, on-prem Oracle) behind corporate firewalls. SHIR initiates outbound TLS polling to ADF service endpoints, requiring ZERO inbound firewall holes."
          },
          {
            "name": "3. ADLS Gen2 Hierarchical Namespace (HNS)",
            "tech": "POSIX-Compliant Directory Tree vs Flat Blob Storage",
            "details": "With HNS enabled, directory renames and atomic moves are O(1) metadata pointer updates. Standard flat blob storage requires copying every file individually (O(N) operations), which destroys Spark commit performance."
          }
        ],
        "simulator": {
          "type": "azure-metadata",
          "tableName": "ADF METADATA CONTROL-TABLE ENGINE",
          "jobs": [
            {
              "id": "job-sap",
              "table": "SAP_HANA.BKPF_ACCOUNTING_DOCS",
              "sourceSystem": "On-Premises SAP HANA (Behind Corporate Firewall)",
              "irType": "Self-Hosted Integration Runtime (SHIR) via Outbound TLS 443",
              "watermark": "AEDAT >= '2026-10-05 00:00:00'",
              "targetPath": "adls-bronze/sap/bkpf/2026/10/05/",
              "commitSpeed": "0.8s (ADLS Gen2 HNS Atomic Pointer Swap)",
              "status": "Success (15M Rows Extracted)"
            },
            {
              "id": "job-oracle",
              "table": "ORACLE_EBS.RA_CUSTOMER_TRX_ALL",
              "sourceSystem": "Legacy Oracle 19c Warehouse",
              "irType": "SHIR Multi-Node Cluster with Auto-Failover",
              "watermark": "LAST_UPDATE_DATE >= '2026-10-05 06:00:00'",
              "targetPath": "adls-bronze/oracle/transactions/2026/10/05/",
              "commitSpeed": "1.1s (POSIX Directory Move)",
              "status": "Success (8.2M Rows Extracted)"
            }
          ]
        }
      },
      "productionCode": [
        {
          "title": "1. Production Metadata Control-Table Schema & Stored Procedure (Azure SQL)",
          "lang": "sql",
          "code": "-- Table to drive 100+ automated ingestion pipelines\nCREATE TABLE etl_control_metadata (\n    table_id INT IDENTITY(1,1) PRIMARY KEY,\n    source_system VARCHAR(50) NOT NULL,       -- e.g. 'SAP_HANA'\n    source_schema VARCHAR(50) NOT NULL,\n    source_table VARCHAR(100) NOT NULL,\n    target_container VARCHAR(50) NOT NULL,   -- e.g. 'bronze-lake'\n    target_directory VARCHAR(200) NOT NULL,\n    watermark_column VARCHAR(50) NULL,        -- NULL for full load, column for incremental\n    last_watermark_value DATETIME2 NULL,\n    load_type VARCHAR(20) DEFAULT 'INCREMENTAL',\n    is_active BIT DEFAULT 1\n);\n\n-- Stored procedure to atomically update watermark after successful ADF pipeline run\nCREATE PROCEDURE sp_update_pipeline_watermark\n    @table_id INT,\n    @new_watermark DATETIME2\nAS\nBEGIN\n    SET NOCOUNT ON;\n    UPDATE etl_control_metadata\n    SET last_watermark_value = @new_watermark,\n        last_processed_time = CURRENT_TIMESTAMP\n    WHERE table_id = @table_id;\nEND;"
        }
      ],
      "defenseBattlecards": [
        {
          "question": "Why is enabling Hierarchical Namespace (HNS) mandatory on Azure Data Lake Storage Gen2 for analytical workloads?",
          "juniorTrap": "Candidate says: 'HNS just organizes files into folders so they look cleaner.'",
          "staffResponse": "In standard Blob storage, folders do not physically exist; they are virtual prefixes in a flat namespace. Renaming a directory with 50,000 Parquet files requires 50,000 separate CopyObject + DeleteObject API calls (O(N) operation), which causes Spark write commits to take 20 minutes and risks partial failures. ADLS Gen2 with Hierarchical Namespace implements real POSIX directories: a directory rename is an instantaneous O(1) atomic metadata pointer swap, guaranteeing ACID consistency and high-speed write throughput.",
          "underTheHood": "Spark committers rely on atomic directory swaps (staging to production directory) at the end of a job. Without HNS, this commit phase can take longer than the actual computation."
        }
      ],
      "incidentPostMortems": [
        {
          "title": "Case Study: The 5-Hour Pipeline Stall on Flat Blob Storage",
          "symptoms": "A Spark job processing 200GB of daily data took 12 minutes to calculate, but spent 4 hours and 48 minutes in the final commit phase.",
          "rootCause": "The storage account was created as standard Azure Blob Storage instead of ADLS Gen2 (HNS disabled). Spark's FileOutputCommitter had to copy 42,000 files one by one to rename the _temporary directory.",
          "resolution": "Migrated storage account to ADLS Gen2 with Hierarchical Namespace enabled. Subsequent job commits completed in 1.4 seconds."
        }
      ]
    },
    {
      "id": "deep-kimball",
      "category": "kimball",
      "tag": "DATA MODELING • KIMBALL STAR SCHEMA & MODERN ELT",
      "title": "Kimball Dimensional Modeling & Modern Star Schemas (SCD Types 1–6)",
      "summary": "Master dimensional data architecture: Facts vs Dimensions, Grain declaration, conformed dimensions, Slowly Changing Dimensions (SCD 1, 2, 3), and modern 3-tier dbt modeling.",
      "metrics": [
        {
          "label": "Architecture Core",
          "val": "Kimball Star Schema"
        },
        {
          "label": "Audit Standard",
          "val": "SCD Type 2 (Surrogate Keys)"
        },
        {
          "label": "Golden Rule",
          "val": "Declare the Grain First"
        },
        {
          "label": "Modern Pattern",
          "val": "3-Tier ELT (Stg/Int/Marts)"
        }
      ],
      "architecture": {
        "overview": "Kimball dimensional modeling provides an intuitive, high-performance schema designed specifically for analytical query engines (OLAP). Rather than 3rd Normal Form relational structures that require 10-way joins, Star Schemas isolate numeric measurements into Fact tables surrounded by denormalized Dimension tables.",
        "tiers": [
          {
            "name": "1. Fact Tables (Numeric Measurements)",
            "tech": "Additive, Semi-Additive, and Non-Additive Facts",
            "details": "Represents business events (orders, transactions, sensor pings). Contains foreign keys pointing to dimension surrogate keys and numeric measure columns (quantity, price, duration)."
          },
          {
            "name": "2. Dimension Tables (The 'Who, What, Where, When')",
            "tech": "Conformed Dimensions with Surrogate Primary Keys",
            "details": "Provides descriptive context for slicing and dicing. Uses integer surrogate keys (e.g. customer_sk) rather than natural business keys to maintain historical consistency across multiple source systems."
          },
          {
            "name": "3. Modern 3-Tier ELT (Staging -> Intermediate -> Marts)",
            "tech": "dbt Cloud / Dataform Transformation Flow",
            "details": "Tier 1: Staging (1:1 view of source data with renamed columns, cast types, and deduplication). Tier 2: Intermediate (Complex business logic joins, currency normalization, windowing). Tier 3: Marts (Final Star Schema Fact and Dimension tables served to analysts)."
          }
        ],
        "simulator": {
          "type": "kimball-scd",
          "tableName": "DIM_CUSTOMER (SCD Type 2 Lifecycle Simulation)",
          "scenarios": [
            {
              "id": "scd-day1",
              "name": "Initial Ingestion (Day 1)",
              "rows": [
                {
                  "sk": 1001,
                  "id": "C-9821",
                  "name": "Rohit Singh",
                  "city": "Bengaluru",
                  "tier": "Gold",
                  "validFrom": "2026-10-05",
                  "validTo": "9999-12-31",
                  "isCurrent": true
                }
              ],
              "verdict": "ACTIVE: Single active row inserted with surrogate key 1001. All orders link to this row."
            },
            {
              "id": "scd-day45",
              "name": "Attribute Change (Day 45: Customer relocates to Hyderabad)",
              "rows": [
                {
                  "sk": 1001,
                  "id": "C-9821",
                  "name": "Rohit Singh",
                  "city": "Bengaluru",
                  "tier": "Gold",
                  "validFrom": "2026-10-05",
                  "validTo": "2026-11-19",
                  "isCurrent": false
                },
                {
                  "sk": 2049,
                  "id": "C-9821",
                  "name": "Rohit Singh",
                  "city": "Hyderabad",
                  "tier": "Platinum",
                  "validFrom": "2026-11-19",
                  "validTo": "9999-12-31",
                  "isCurrent": true
                }
              ],
              "verdict": "HISTORICAL PRESERVATION: Old row expired (is_current=false). New row inserted with fresh surrogate key (2049). Past revenue stays attributed to Bengaluru; future orders attribute to Hyderabad."
            }
          ]
        }
      },
      "productionCode": [
        {
          "title": "1. Production SQL: High-Performance SCD Type 2 MERGE Pattern",
          "lang": "sql",
          "code": "-- Production SCD Type 2 implementation with valid_from, valid_to, and is_current flags\nMERGE INTO dim_customer AS target\nUSING (\n    -- Source records joining with current dimension records to detect changes\n    SELECT \n        src.customer_id AS merge_key,\n        src.customer_id,\n        src.full_name,\n        src.city,\n        src.tier\n    FROM staging_customers src\n    \n    UNION ALL\n    \n    -- Null merge_key generates an INSERT for new version rows\n    SELECT \n        NULL AS merge_key,\n        src.customer_id,\n        src.full_name,\n        src.city,\n        src.tier\n    FROM staging_customers src\n    JOIN dim_customer curr \n      ON src.customer_id = curr.customer_id AND curr.is_current = TRUE\n    WHERE (src.city <> curr.city OR src.tier <> curr.tier) -- Attribute change detected!\n) AS source\nON target.customer_id = source.merge_key AND target.is_current = TRUE\n\n-- Step 1: Expire old active row\nWHEN MATCHED AND (target.city <> source.city OR target.tier <> source.tier) THEN\n    UPDATE SET \n        target.valid_to = CURRENT_DATE(),\n        target.is_current = FALSE\n\n-- Step 2: Insert brand new active row with fresh surrogate key\nWHEN NOT MATCHED THEN\n    INSERT (customer_sk, customer_id, full_name, city, tier, valid_from, valid_to, is_current)\n    VALUES (\n        UUID_STRING(), \n        source.customer_id, \n        source.full_name, \n        source.city, \n        source.tier, \n        CURRENT_DATE(), \n        '9999-12-31', \n        TRUE\n    );"
        }
      ],
      "defenseBattlecards": [
        {
          "question": "Why do modern data warehouses (BigQuery, Snowflake) still benefit from Kimball Star Schemas when columnar storage compresses wide tables so efficiently?",
          "juniorTrap": "Junior says: 'Star schemas are outdated; we should just put everything into one massive 500-column wide table.'",
          "staffResponse": "While One Big Table (OBT) works well for simple reporting, enterprise analytics requires Star Schemas because: 1) Conformed Dimensions maintain a single source of truth across multiple business processes (e.g. Sales, Returns, and Support tickets all reference the exact same dim_customer). In OBT, customer attributes are copied across 20 tables, leading to metric drift when addresses or tiers update. 2) Reusability: Slicing by customer segment doesn't require scanning hundreds of millions of transaction rows. 3) Star Schemas minimize columnar memory cache churn by isolating slowly-changing metadata from high-velocity transaction facts.",
          "underTheHood": "Modern CBOs (Cost-Based Optimizers) in Snowflake and Spark recognize Star Schema join patterns and automatically rewrite them into Star Join filters, using Bloom filters on dimension tables to prune fact table partitions before the join occurs."
        }
      ],
      "incidentPostMortems": [
        {
          "title": "Case Study: The Chasm Trap That Inflated Annual Revenue Reports by $140M",
          "symptoms": "The executive revenue dashboard reported $320M in Q3 revenue, but actual bank deposits were only $180M.",
          "rootCause": "A query joined one Dimension table (dim_order) with two independent Fact tables (fact_order_items and fact_payments) in a single SQL query without aggregating first. Because orders have multiple items and multiple payments, a Cartesian product occurred, duplicating payment amounts across all item rows.",
          "resolution": "Enforced Kimball Chasm Trap rule: Never join two Fact tables directly in a single SQL query. Pre-aggregate each Fact table to the order_id grain in separate CTEs before joining them."
        }
      ]
    }
  ],
  "resumeDefenseSuite": [
    {
      "project": "Siemens Energy: Next-Gen Analytics Lakehouse (Azure Databricks + Snowflake)",
      "questions": [
        {
          "q": "How did you convert 40,000+ database objects to Snowflake without errors?",
          "answer": "We had legacy SQL Server and SAP HANA schemas. I helped write a Python automated parser using regex and SQL AST libraries to translate dialect differences (e.g. converting NVARCHAR to VARCHAR, date format syntax, and IDENTITY to AUTOINCREMENT). We then deployed them via automated Snowflake stored procedures executed through Azure DevOps CI/CD pipelines, validating row counts and schema integrity with automated reconciliation scripts."
        },
        {
          "q": "Why did you use Azure Databricks with PySpark instead of running SQL inside Snowflake directly?",
          "answer": "Snowflake is great for SQL transformations, but our supply chain data arrived from varied external ERP systems and API endpoints requiring complex data cleansing, schema drift validation, and multi-hop Bronze-to-Silver curation. PySpark on Databricks gave us resilient distributed memory for heavy wrangling, parallel API extraction, and complex windowing before loading clean dimensional tables into Snowflake."
        },
        {
          "q": "How did you optimize PySpark jobs to reduce compute costs by 32%?",
          "answer": "1) We tuned spark.sql.shuffle.partitions down from the default 200 on smaller hourly pipelines to avoid overhead from hundreds of tiny empty tasks. 2) We enabled Adaptive Query Execution (AQE) to dynamically coalesce shuffle partitions and convert sort-merge joins into broadcast hash joins at runtime. 3) We identified join key data skew on supplier IDs and applied key salting."
        }
      ]
    },
    {
      "project": "The Coca-Cola Company: BI Migration & ADF Pipelines",
      "questions": [
        {
          "q": "How did you structure 40+ ADF pipelines across diverse business domains?",
          "answer": "We built metadata-driven pipelines instead of hardcoding 40 separate ADF pipelines. We used a configuration control table in Azure SQL DB listing source tables, target paths, watermark columns, and load frequency. A single master ADF pipeline with a Lookup activity and ForEach loop dynamically triggered parameterized child pipelines, dramatically reducing maintenance overhead."
        },
        {
          "q": "How did you implement dbt Cloud with Snowflake?",
          "answer": "We structured dbt into three layers: 1) Staging models (light cleaning, renaming columns, casting data types), 2) Intermediate models (business logic, joining transactions with exchange rates), and 3) Marts (final Star Schema fact and dimension tables). We used dbt incremental models with unique_key to only process new/updated daily records rather than rebuilding full tables every night."
        },
        {
          "q": "What cluster keys did you choose on Snowflake and why?",
          "answer": "Our largest fact table was daily sales transactions (billions of rows). We analyzed query profiles and saw that 90% of business queries filtered on sale_date and operating_unit_id. We set CLUSTER BY (sale_date, operating_unit_id), which brought average query execution time down from 25 seconds to under 4 seconds by allowing Snowflake to prune 85%+ of micro-partitions."
        }
      ]
    }
  ]
};
