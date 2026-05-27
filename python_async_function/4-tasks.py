#!/usr/bin/env python3
"""
This module provides the task_wait_n coroutine which uses task_wait_random
to spawn multiple asyncio.Tasks concurrently and return their results.
"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns task_wait_random n times with the specified max_delay and returns
    the list of all the delays in ascending order using concurrency.
    """
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []

    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)

    return delays
