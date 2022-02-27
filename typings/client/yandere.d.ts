export default class yandere {
    constructor(options?: yandereOptions);
    fullpost: boolean | undefined;
    limit: number;
    tags: string;
    post: Promise<yanderePost>;
}
declare type yandereOptions = {
    tags?: Array<string>;
    limit?: number;
    fullpost?: boolean | undefined;
};
declare type yanderePost = {
    image?: string;
    rating: string;
    tags: string | Array<string>;
    source: string;
    created_at: number;
    author: string;
    id?: number;
    updated_at?: number;
    creator_id?: number;
    approver_id?: number | null;
    change?: number;
    score?: number;
    md5?: string;
    file_size?: number;
    file_ext?: string;
    file_url?: string;
    is_shown_in_index?: boolean;
    preview_url?: string;
    preview_width?: number;
    preview_height?: number;
    actual_preview_width?: number;
    actual_preview_height?: number;
    sample_url?: string;
    sample_width?: number;
    sample_height?: number;
    sample_file_size?: number;
    jpeg_url?: string;
    jpeg_width?: number;
    jpeg_height?: number;
    jpeg_file_size?: number;
    is_rating_locked?: boolean;
    has_children?: boolean;
    parent_id?: number;
    status?: string;
    is_peding?: boolean;
    width?: number;
    height?: number;
    is_held?: boolean;
    frames_pending_string?: string;
    frames_pending?: Array<unknown>;
    frames_string?: Array<unknown>;
    frames?: Array<unknown>;
    is_note_locked?: boolean;
    last_noted_at?: number;
    last_commented_at?: number;
};
export {};
