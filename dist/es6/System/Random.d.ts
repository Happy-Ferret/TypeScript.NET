import { ArrayLikeWritable } from "./Collections/Array/ArrayLikeWritable";
export declare module Random {
    /**
     * Returns a random integer from 0 to the maxExclusive.
     * Negative numbers are allowed.
     *
     * @param maxExclusive
     * @returns {number}
     */
    function integer(maxExclusive: number): number;
    /**
     * Returns a random integer from 0 to the boundary.
     * Return value will be less than the boundary unless inclusive is set to true.
     * Negative numbers are allowed.
     *
     * @param boundary
     * @param inclusive
     * @returns {number}
     */
    function next(boundary: number, inclusive?: boolean): number;
    module next {
        function integer(boundary: number, inclusive?: boolean): number;
        function float(boundary?: number): number;
        function inRange(min: number, max: number, inclusive?: boolean): number;
    }
    /**
     * Returns an array of random integers.
     * @param count
     * @param boundary
     * @param inclusive
     * @returns {number[]}
     */
    function integers(count: number, boundary: number, inclusive?: boolean): number[];
    /**
     * Shuffles an array.
     * @param target
     * @returns {T}
     */
    function shuffle<T extends ArrayLikeWritable<any>>(target: T): T;
    /**
     * Creates a copy of an array-like  and returns it shuffled.
     * @param source
     * @returns {T[]}
     */
    function copy<T>(source: ArrayLike<T>): T[];
    /**
     * Returns a distinct random set from the source array up to the maxCount or the full length of the array.
     * @param source
     * @param maxCount
     * @returns {any}
     */
    function select<T>(source: ArrayLike<T>, maxCount: number): T[];
    module select {
        /**
         * Returns random value from an array.
         * @param source
         * @param throwIfEmpty
         */
        function one<T>(source: ArrayLike<T>, throwIfEmpty: true): T;
        function one<T>(source: ArrayLike<T>, throwIfEmpty?: boolean): T | undefined;
    }
}
