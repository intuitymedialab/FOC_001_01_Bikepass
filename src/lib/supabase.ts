export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bikes: {
        Row: {
          additional_info: string | null
          bike_id: string | null
          construction_year: number | null
          created_at: string
          date_last_drivetrain_cleaning: string | null
          date_last_tyrepressure_check: string | null
          date_of_purchase: string | null
          frame_color: string | null
          frame_number: string | null
          id: number
          image_path: string | null
          notes: string | null
          owner_id: string | null
          parts: number[] | null
          parts_list: number[] | null
          price_in_eur: number | null
          serial_number: string | null
          size: string | null
          stockbike_id: string | null
        }
        Insert: {
          additional_info?: string | null
          bike_id?: string | null
          construction_year?: number | null
          created_at?: string
          date_last_drivetrain_cleaning?: string | null
          date_last_tyrepressure_check?: string | null
          date_of_purchase?: string | null
          frame_color?: string | null
          frame_number?: string | null
          id?: number
          image_path?: string | null
          notes?: string | null
          owner_id?: string | null
          parts?: number[] | null
          parts_list?: number[] | null
          price_in_eur?: number | null
          serial_number?: string | null
          size?: string | null
          stockbike_id?: string | null
        }
        Update: {
          additional_info?: string | null
          bike_id?: string | null
          construction_year?: number | null
          created_at?: string
          date_last_drivetrain_cleaning?: string | null
          date_last_tyrepressure_check?: string | null
          date_of_purchase?: string | null
          frame_color?: string | null
          frame_number?: string | null
          id?: number
          image_path?: string | null
          notes?: string | null
          owner_id?: string | null
          parts?: number[] | null
          parts_list?: number[] | null
          price_in_eur?: number | null
          serial_number?: string | null
          size?: string | null
          stockbike_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bikes_stockbike_id_fkey"
            columns: ["stockbike_id"]
            isOneToOne: false
            referencedRelation: "stockbikes"
            referencedColumns: ["uuid"]
          },
        ]
      }
      parts: {
        Row: {
          bike_uuid: string
          created_at: string
          custom_notes: string | null
          id: number
          is_Stock: boolean | null
          stockpart_uuid: string | null
          uuid: string | null
        }
        Insert: {
          bike_uuid: string
          created_at?: string
          custom_notes?: string | null
          id?: number
          is_Stock?: boolean | null
          stockpart_uuid?: string | null
          uuid?: string | null
        }
        Update: {
          bike_uuid?: string
          created_at?: string
          custom_notes?: string | null
          id?: number
          is_Stock?: boolean | null
          stockpart_uuid?: string | null
          uuid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "parts_bike_uuid_fkey"
            columns: ["bike_uuid"]
            isOneToOne: false
            referencedRelation: "bikes"
            referencedColumns: ["bike_id"]
          },
          {
            foreignKeyName: "parts_stockpart_uuid_fkey"
            columns: ["stockpart_uuid"]
            isOneToOne: false
            referencedRelation: "stockparts"
            referencedColumns: ["stockparts_uuid"]
          },
        ]
      }
      parts_backup: {
        Row: {
          bike_uuid: string | null
          created_at: string
          custom_notes: string | null
          id: number
          is_Stock: boolean | null
          stockpart_uuid: string | null
        }
        Insert: {
          bike_uuid?: string | null
          created_at?: string
          custom_notes?: string | null
          id?: number
          is_Stock?: boolean | null
          stockpart_uuid?: string | null
        }
        Update: {
          bike_uuid?: string | null
          created_at?: string
          custom_notes?: string | null
          id?: number
          is_Stock?: boolean | null
          stockpart_uuid?: string | null
        }
        Relationships: []
      }
      stockbikes: {
        Row: {
          brand: string
          created_at: string
          id: number
          manual_URL: string | null
          model: string
          uuid: string | null
        }
        Insert: {
          brand: string
          created_at?: string
          id?: number
          manual_URL?: string | null
          model: string
          uuid?: string | null
        }
        Update: {
          brand?: string
          created_at?: string
          id?: number
          manual_URL?: string | null
          model?: string
          uuid?: string | null
        }
        Relationships: []
      }
      stockparts: {
        Row: {
          additional_info: Json | null
          brand: string | null
          created_at: string
          id: number
          image_path: string | null
          manual_URL: string | null
          material: string | null
          model: string | null
          notes: string | null
          parttype: Database["public"]["Enums"]["part_type"] | null
          stockparts_uuid: string | null
        }
        Insert: {
          additional_info?: Json | null
          brand?: string | null
          created_at?: string
          id?: number
          image_path?: string | null
          manual_URL?: string | null
          material?: string | null
          model?: string | null
          notes?: string | null
          parttype?: Database["public"]["Enums"]["part_type"] | null
          stockparts_uuid?: string | null
        }
        Update: {
          additional_info?: Json | null
          brand?: string | null
          created_at?: string
          id?: number
          image_path?: string | null
          manual_URL?: string | null
          material?: string | null
          model?: string | null
          notes?: string | null
          parttype?: Database["public"]["Enums"]["part_type"] | null
          stockparts_uuid?: string | null
        }
        Relationships: []
      }
      stockparts_backup: {
        Row: {
          additional_info: Json | null
          bike_uuid: string | null
          brand: string | null
          created_at: string
          id: number
          image_path: string | null
          is_Stock: boolean | null
          manuel_URL: string | null
          material: string | null
          model: string | null
          Notes: string | null
          parttype: Database["public"]["Enums"]["part_type"] | null
          uuid: string | null
        }
        Insert: {
          additional_info?: Json | null
          bike_uuid?: string | null
          brand?: string | null
          created_at?: string
          id?: number
          image_path?: string | null
          is_Stock?: boolean | null
          manuel_URL?: string | null
          material?: string | null
          model?: string | null
          Notes?: string | null
          parttype?: Database["public"]["Enums"]["part_type"] | null
          uuid?: string | null
        }
        Update: {
          additional_info?: Json | null
          bike_uuid?: string | null
          brand?: string | null
          created_at?: string
          id?: number
          image_path?: string | null
          is_Stock?: boolean | null
          manuel_URL?: string | null
          material?: string | null
          model?: string | null
          Notes?: string | null
          parttype?: Database["public"]["Enums"]["part_type"] | null
          uuid?: string | null
        }
        Relationships: []
      }
      stockparts_duplicate: {
        Row: {
          additional_info: Json | null
          brand: string | null
          created_at: string
          id: number
          image_path: string | null
          manual_URL: string | null
          material: string | null
          model: string | null
          notes: string | null
          parttype: Database["public"]["Enums"]["part_type"] | null
          uuid: string | null
        }
        Insert: {
          additional_info?: Json | null
          brand?: string | null
          created_at?: string
          id?: number
          image_path?: string | null
          manual_URL?: string | null
          material?: string | null
          model?: string | null
          notes?: string | null
          parttype?: Database["public"]["Enums"]["part_type"] | null
          uuid?: string | null
        }
        Update: {
          additional_info?: Json | null
          brand?: string | null
          created_at?: string
          id?: number
          image_path?: string | null
          manual_URL?: string | null
          material?: string | null
          model?: string | null
          notes?: string | null
          parttype?: Database["public"]["Enums"]["part_type"] | null
          uuid?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      part_type:
      | "fork"
      | "frame"
      | "crankset"
      | "front_derailleur"
      | "rear_derailleur"
      | "chain"
      | "cassette"
      | "break_caliper"
      | "pedal"
      | "wheelset"
      | "front_tyre"
      | "hub"
      | "spokes"
      | "handlebar"
      | "stem"
      | "headset"
      | "bar_tape"
      | "grip"
      | "saddle"
      | "seatpost"
      | "seatpost_clamp"
      | "motor"
      | "battery"
      | "display"
      | "bottle_cage"
      | "fender"
      | "light"
      | "rotor"
      | "shift_lever"
      | "break_lever"
      | "shift_break_lever"
      | "rear_tyre"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
    PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
    PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof PublicSchema["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof PublicSchema["Enums"]
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
  : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never
